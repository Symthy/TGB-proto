const Roles = {
  USER: 'User',
  READER: 'Reader',
  ADMIN: 'Admin',

} as const;
export type Role = typeof Roles[keyof typeof Roles];
