/**
 * Script for offlineLogin.ejs
 */

const offlineLoginUsername = document.getElementById('offlineLoginUsername')
const offlineLoginButton   = document.getElementById('offlineLoginButton')
const offlineLoginError    = document.getElementById('offlineLoginError')

offlineLoginUsername.addEventListener('input', (e) => {
    const val = e.target.value
    if(val && validUsername.test(val)) {
        offlineLoginError.style.opacity = 0
        offlineLoginButton.disabled = false
    } else {
        offlineLoginError.style.opacity = 1
        offlineLoginButton.disabled = true
    }
})

document.getElementById('offlineLoginForm').onsubmit = () => { return false }

offlineLoginButton.addEventListener('click', () => {
    const account = ConfigManager.addOfflineAuthAccount(offlineLoginUsername.value)
    ConfigManager.save()
    updateSelectedAccount(account)
    offlineLoginUsername.value = ''
    switchView(VIEWS.offlineLogin, loginOptionsViewOnLoginSuccess, 500, 500)
})