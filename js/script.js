// |-----| Replace Text Effect in header |-----| //
const checkReplace = document.querySelector('.replace-me');

if(checkReplace !== null) {
    const replace = new ReplaceMe(checkReplace, {
            animation: 'animated fadeIn',
            speed: 2000,
            separator: ',',
            loopCount: 'infinite',
            autoRun: true
        })
}