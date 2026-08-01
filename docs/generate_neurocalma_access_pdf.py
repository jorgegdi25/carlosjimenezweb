from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics
from reportlab.platypus import (
    Flowable,
    Image,
    KeepTogether,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "output" / "pdf"
OUTPUT = OUTPUT_DIR / "bienvenida-y-acceso-neurocalma-444.pdf"
HERO = ROOT / "public" / "images" / "landing-neurocalma" / "image neur.png"
AUTHOR = ROOT / "public" / "assets" / "img" / "carlos-2.png"

COURSE_URL = "https://drive.google.com/drive/folders/1haJPsNSXJ0WVFm9saZodkWe6mycG173u"
WHATSAPP_URL = (
    "https://wa.me/573104534160"
    "?text=Hola,%20necesito%20ayuda%20para%20ingresar%20al%20curso%20Neurocalma%20444."
)

NAVY = colors.HexColor("#082D3F")
GREEN = colors.HexColor("#28A878")
TEAL = colors.HexColor("#0E7A77")
MINT = colors.HexColor("#E9F7F1")
PALE = colors.HexColor("#F3F8F7")
GOLD = colors.HexColor("#E7B84B")
INK = colors.HexColor("#17313A")
MUTED = colors.HexColor("#557078")
LINE = colors.HexColor("#CFE3DD")
WHITE = colors.white


class Rule(Flowable):
    def __init__(self, color=GREEN, thickness=2, width=6.7 * inch):
        super().__init__()
        self.color = color
        self.thickness = thickness
        self.width = width
        self.height = thickness + 4

    def draw(self):
        self.canv.setStrokeColor(self.color)
        self.canv.setLineWidth(self.thickness)
        self.canv.line(0, 2, self.width, 2)


def add_page_number(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(MUTED)
    canvas.setFont("Helvetica", 8.5)
    canvas.drawCentredString(
        letter[0] / 2,
        0.34 * inch,
        f"Carlos Alberto Jiménez Vélez   •   {doc.page}",
    )
    if doc.page > 1:
        canvas.drawRightString(
            letter[0] - 0.8 * inch,
            letter[1] - 0.42 * inch,
            "NEUROCALMA 444  |  ACCESO AL CURSO",
        )
    canvas.restoreState()


def step_table(number, title, body, styles):
    number_box = Table(
        [[Paragraph(str(number), styles["step_number"])]],
        colWidths=[0.42 * inch],
        rowHeights=[0.42 * inch],
    )
    number_box.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), GREEN),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("ALIGN", (0, 0), (-1, -1), "CENTER"),
                ("BOX", (0, 0), (-1, -1), 0, GREEN),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    copy = Paragraph(
        f"<b>{title}</b><br/><font color='#557078'>{body}</font>",
        styles["step_copy"],
    )
    table = Table(
        [[number_box, copy]],
        colWidths=[0.58 * inch, 5.89 * inch],
        hAlign="LEFT",
    )
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), PALE),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("BOX", (0, 0), (-1, -1), 0.6, LINE),
                ("LEFTPADDING", (0, 0), (0, -1), 8),
                ("RIGHTPADDING", (0, 0), (0, -1), 4),
                ("TOPPADDING", (0, 0), (-1, -1), 6),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
                ("LEFTPADDING", (1, 0), (1, -1), 8),
                ("RIGHTPADDING", (1, 0), (1, -1), 10),
            ]
        )
    )
    return table


def note_box(label, body, styles, color=GREEN, fill=MINT):
    bar = Table([[""]], colWidths=[0.13 * inch], rowHeights=[0.72 * inch])
    bar.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, -1), color)]))
    copy = Paragraph(
        f"<font color='{color.hexval()}'><b>{label.upper()}</b></font><br/>{body}",
        styles["note"],
    )
    table = Table(
        [[bar, copy]],
        colWidths=[0.18 * inch, 6.29 * inch],
        hAlign="LEFT",
    )
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (1, 0), (1, 0), fill),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("LEFTPADDING", (0, 0), (0, 0), 0),
                ("RIGHTPADDING", (0, 0), (0, 0), 0),
                ("TOPPADDING", (0, 0), (0, 0), 0),
                ("BOTTOMPADDING", (0, 0), (0, 0), 0),
                ("LEFTPADDING", (1, 0), (1, 0), 12),
                ("RIGHTPADDING", (1, 0), (1, 0), 12),
                ("TOPPADDING", (1, 0), (1, 0), 9),
                ("BOTTOMPADDING", (1, 0), (1, 0), 9),
            ]
        )
    )
    return table


def build_styles():
    styles = getSampleStyleSheet()
    styles.add(
        ParagraphStyle(
            "kicker",
            parent=styles["Normal"],
            fontName="Helvetica-Bold",
            fontSize=9,
            leading=11,
            textColor=GREEN,
            alignment=TA_CENTER,
            spaceAfter=5,
        )
    )
    styles.add(
        ParagraphStyle(
            "title_custom",
            parent=styles["Title"],
            fontName="Helvetica-Bold",
            fontSize=24,
            leading=26,
            textColor=NAVY,
            alignment=TA_CENTER,
            spaceAfter=5,
        )
    )
    styles.add(
        ParagraphStyle(
            "subtitle",
            parent=styles["Normal"],
            fontName="Helvetica",
            fontSize=10.8,
            leading=14,
            textColor=MUTED,
            alignment=TA_CENTER,
            spaceAfter=8,
        )
    )
    styles.add(
        ParagraphStyle(
            "h1_custom",
            parent=styles["Heading1"],
            fontName="Helvetica-Bold",
            fontSize=20,
            leading=23,
            textColor=NAVY,
            spaceBefore=2,
            spaceAfter=8,
        )
    )
    styles.add(
        ParagraphStyle(
            "h2_custom",
            parent=styles["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=14,
            leading=17,
            textColor=TEAL,
            spaceBefore=7,
            spaceAfter=6,
        )
    )
    styles.add(
        ParagraphStyle(
            "body_custom",
            parent=styles["BodyText"],
            fontName="Helvetica",
            fontSize=10.4,
            leading=14,
            textColor=INK,
            spaceAfter=7,
        )
    )
    styles.add(
        ParagraphStyle(
            "step_number",
            parent=styles["Normal"],
            fontName="Helvetica-Bold",
            fontSize=15,
            leading=17,
            textColor=WHITE,
            alignment=TA_CENTER,
        )
    )
    styles.add(
        ParagraphStyle(
            "step_copy",
            parent=styles["BodyText"],
            fontName="Helvetica",
            fontSize=10.1,
            leading=13.5,
            textColor=NAVY,
        )
    )
    styles.add(
        ParagraphStyle(
            "note",
            parent=styles["BodyText"],
            fontName="Helvetica",
            fontSize=9.8,
            leading=13,
            textColor=INK,
        )
    )
    styles.add(
        ParagraphStyle(
            "center_small",
            parent=styles["BodyText"],
            fontName="Helvetica",
            fontSize=9.3,
            leading=12,
            textColor=MUTED,
            alignment=TA_CENTER,
        )
    )
    styles.add(
        ParagraphStyle(
            "button",
            parent=styles["Normal"],
            fontName="Helvetica-Bold",
            fontSize=11,
            leading=13,
            textColor=WHITE,
            alignment=TA_CENTER,
        )
    )
    return styles


def build_pdf():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    styles = build_styles()
    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=letter,
        rightMargin=0.8 * inch,
        leftMargin=0.8 * inch,
        topMargin=0.58 * inch,
        bottomMargin=0.58 * inch,
        title="Gracias por adquirir Neurocalma 444",
        author="Carlos Alberto Jiménez Vélez",
        subject="Guía rápida para ingresar y ver el curso Neurocalma 444",
    )

    story = []
    hero = Image(str(HERO), width=5.5 * inch, height=3.095 * inch)
    hero.hAlign = "CENTER"
    story.append(hero)
    story.append(Spacer(1, 0.08 * inch))
    story.append(Paragraph("GRACIAS POR TU COMPRA", styles["kicker"]))
    story.append(Paragraph("Bienvenido a Neurocalma 444", styles["title_custom"]))
    story.append(
        Paragraph(
            "Tu acceso al curso se habilita automáticamente después de la aprobación del pago. "
            "Conserva esta guía para ingresar correctamente.",
            styles["subtitle"],
        )
    )
    story.append(Rule(color=GOLD, thickness=2.2))
    story.append(Spacer(1, 0.08 * inch))
    story.append(
        note_box(
            "Lo más importante",
            "Debes abrir el curso con <b>la misma cuenta de Google que escribiste durante el pago en Wompi</b>.",
            styles,
        )
    )
    story.append(Spacer(1, 0.08 * inch))
    story.append(Paragraph("Cómo ingresar al curso", styles["h2_custom"]))
    story.append(
        step_table(
            1,
            "Revisa el correo utilizado en la compra.",
            "Busca el mensaje de bienvenida y la notificación de Google Drive. Revisa también Promociones, No deseado o Spam.",
            styles,
        )
    )
    story.append(Spacer(1, 0.05 * inch))
    story.append(
        step_table(
            2,
            "Confirma que estás en la cuenta correcta.",
            "En Google, toca tu foto de perfil y verifica que aparezca el mismo correo registrado en Wompi.",
            styles,
        )
    )
    story.append(Spacer(1, 0.05 * inch))
    story.append(
        step_table(
            3,
            "Pulsa «Entrar al curso».",
            "El enlace abrirá la carpeta privada de Neurocalma 444 en Google Drive.",
            styles,
        )
    )
    story.append(Spacer(1, 0.05 * inch))
    story.append(
        step_table(
            4,
            "Reproduce los videos en orden.",
            "Comienza por la introducción y continúa con los capítulos 1 al 8. Los videos están preparados para verse en línea.",
            styles,
        )
    )

    story.append(PageBreak())
    story.append(Paragraph("GUÍA RÁPIDA DE ACCESO", styles["kicker"]))
    story.append(Paragraph("Si no puedes abrir el curso", styles["h1_custom"]))
    story.append(Rule())
    story.append(Spacer(1, 0.11 * inch))

    problems = [
        (
            "Google muestra «Solicitar acceso»",
            "Normalmente significa que abriste el enlace con otra cuenta. Cambia a la misma cuenta de Google utilizada en la compra y vuelve a intentarlo.",
        ),
        (
            "No llegó el correo",
            "Espera unos minutos y revisa todas las bandejas. También puedes ingresar con el botón directo que aparece más abajo.",
        ),
        (
            "El pago figura aprobado, pero el acceso no aparece",
            "Conserva el comprobante de Wompi y solicita ayuda indicando el correo de la compra. No envíes números completos de tarjeta ni claves.",
        ),
        (
            "No aparece la opción de descargar",
            "Es correcto. El acceso está configurado para reproducir los videos en línea y proteger el material del curso.",
        ),
    ]
    for title, body in problems:
        story.append(
            KeepTogether(
                [
                    Paragraph(title, styles["h2_custom"]),
                    Paragraph(body, styles["body_custom"]),
                ]
            )
        )

    story.append(Spacer(1, 0.06 * inch))
    course_button = Table(
        [[Paragraph(f'<link href="{COURSE_URL}">ENTRAR AL CURSO NEUROCALMA 444</link>', styles["button"])]],
        colWidths=[6.47 * inch],
        rowHeights=[0.5 * inch],
        hAlign="LEFT",
    )
    course_button.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), GREEN),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("ALIGN", (0, 0), (-1, -1), "CENTER"),
                ("BOX", (0, 0), (-1, -1), 0, GREEN),
            ]
        )
    )
    story.append(course_button)
    story.append(Spacer(1, 0.1 * inch))
    story.append(
        Paragraph(
            "El enlace solo permitirá el ingreso a las cuentas que ya tengan acceso autorizado.",
            styles["center_small"],
        )
    )

    story.append(Spacer(1, 0.08 * inch))
    story.append(
        note_box(
            "Uso personal",
            "Tu acceso está asociado al correo de la compra. No compartas los videos, la carpeta ni el material complementario con otras personas.",
            styles,
            color=TEAL,
            fill=PALE,
        )
    )
    story.append(Spacer(1, 0.12 * inch))

    support_button = Table(
        [[Paragraph(f'<link href="{WHATSAPP_URL}">NECESITO AYUDA POR WHATSAPP</link>', styles["button"])]],
        colWidths=[6.47 * inch],
        rowHeights=[0.45 * inch],
        hAlign="LEFT",
    )
    support_button.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), NAVY),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("ALIGN", (0, 0), (-1, -1), "CENTER"),
                ("BOX", (0, 0), (-1, -1), 0, NAVY),
            ]
        )
    )
    story.append(support_button)
    story.append(Spacer(1, 0.16 * inch))

    author_row = Table(
        [
            [
                Image(str(AUTHOR), width=0.82 * inch, height=0.82 * inch),
                Paragraph(
                    "<b>Carlos Alberto Jiménez Vélez</b><br/>"
                    "<font color='#557078'>Gracias por confiar en este proceso. "
                    "Te invitamos a avanzar a tu ritmo y convertir la calma en una práctica cotidiana.</font>",
                    styles["body_custom"],
                ),
            ]
        ],
        colWidths=[1.0 * inch, 5.47 * inch],
        hAlign="LEFT",
    )
    author_row.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 6),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    story.append(author_row)

    doc.build(story, onFirstPage=add_page_number, onLaterPages=add_page_number)
    print(OUTPUT)


if __name__ == "__main__":
    build_pdf()
