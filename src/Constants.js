const prefix = 'http://atxfloods-test.com/'
const Constants = {
    base: prefix,
    login : prefix+'admin/auth/login',
    changePassword: prefix+'admin/auth/change-password',
    counts: prefix+'admin/counts',
    crossings: prefix+'admin/crossings/all',
    crossingsImport: prefix+'admin/crossings/import',
    deleteCrossing : prefix + 'admin/crossings/delete/',
    createCrossing : prefix + 'admin/crossings/create',
    updateCrossing : prefix + 'admin/crossings/update/',
    closures: prefix+'admin/closures',
    cameras: prefix+'admin/cameras/all',
    createCameras: prefix+'admin/cameras/create',
    deleteCameras: prefix+'admin/cameras/delete/',
    updateCameras : prefix + 'admin/cameras/update/',
}
export const userToken = () => {
    let { cookie } = document;
    let cookieArray = cookie.split('_token=');
    return cookieArray[1];
}
export default Constants;