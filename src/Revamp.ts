import bcMod from 'bondage-club-mod-sdk'
import { CUSTOM_ACTION_TAG, ModName, ModVersion } from './Definition';

(function () {
    if (window.BCRevampLilian_Loaded) return;
    window.BCRevampLilian_Loaded = false;

    const this_script_src = document.getElementById('BCRevampLilianLoader')?.getAttribute('src');
    if (!this_script_src) {
        console.log('BCRevampLilianLoader not found.');
        return;
    }
    const asset_url = this_script_src.substring(0, this_script_src.lastIndexOf('/') + 1) + 'assets/';

    const mod = bcMod.registerMod({
        name: ModName,
        fullName: ModName,
        version: ModVersion,
        repository: 'https://github.com/Flameustc/BCRevamp-Lilian',
    });

    window.BCRevampLilian_Loaded = true;
    console.log(`${ModName} v${ModVersion} loaded.`);
})()