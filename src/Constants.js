// Live = 'http://atxfloods-test.com/'
// Local = http://192.168.0.110/
const prefix = 'http://atxfloods-test.com/';
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
    singleCamera: prefix + 'admin/cameras/',
    createCameras: prefix+'admin/cameras/create',
    deleteCameras: prefix+'admin/cameras/delete/',
    updateCameras : prefix + 'admin/cameras/update/',
    contacts: prefix + 'admin/contacts/all',
    deleteContacts : prefix + 'admin/contacts/delete/',
    howItWorksUpdate: prefix + 'admin/static/update/info',
    howItWorksContent: prefix + 'admin/static/info'
}
export const userToken = () => {
    let { cookie } = document;
    let cookieArray = cookie.split('_token=');
    return cookieArray[1];
}
export default Constants;