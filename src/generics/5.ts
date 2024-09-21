export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type Description = Record<UserRole, string>;
// Замініть наступний код на версію за допомогою Record
const RoleDescription: Description = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};
