interface User {
  id: number,
  login: string,
  role: string,
}

const user:User = {
  id: 1,
  login: 'test',
  role: 'user',
}

const checkPermissionsDecorator = (roles) => {
  return (user) => {
      return roles.includes(user.role);
  }
}

type PermissionChecker = (user: User) => boolean;
const checkPermission:PermissionChecker = checkPermissionsDecorator(['admin']);
const hasPermissions:boolean = checkPermission(user);

console.log(hasPermissions);