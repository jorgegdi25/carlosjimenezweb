function findCoursePermission(email) {
  const response = Drive.Permissions.list(COURSE_CONFIG.folderId, {
    fields: "permissions(id,type,role,emailAddress)",
    supportsAllDrives: true,
  });
  const permissions = response.permissions || [];
  return permissions.find(function (permission) {
    return permission.type === "user" &&
      String(permission.emailAddress || "").toLowerCase() === email;
  }) || null;
}

function grantCourseAccess(email) {
  const normalizedEmail = normalizeEmail(email);
  const existing = findCoursePermission(normalizedEmail);
  if (existing) {
    return { id: existing.id, alreadyGranted: true };
  }

  const permission = Drive.Permissions.create(
    {
      type: "user",
      role: "reader",
      emailAddress: normalizedEmail,
    },
    COURSE_CONFIG.folderId,
    {
      sendNotificationEmail: false,
      supportsAllDrives: true,
      fields: "id,type,role,emailAddress",
    }
  );

  return { id: permission.id, alreadyGranted: false };
}

function verifyCourseAccess(email) {
  return Boolean(findCoursePermission(normalizeEmail(email)));
}
