const Roles = {
  USER: 'USER',
  ADMIN: 'ADMIN',
} as const;
export type Role = typeof Roles[keyof typeof Roles];

export class RoleValue {
  static user(): Role {
    return 'USER';
  }
  static admin(): Role {
    return 'ADMIN';
  }
}
