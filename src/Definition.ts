function buildVersion(v1: number, v2: number, v3: number) {
    return `${v1}.${v2}.${v3}`;
}

export const ModVersion = buildVersion(0, 1, 0);
export const ModName = 'BCRevamp-Lilian';
export const HTMLIDPrefix = "BCRL_";

export const DebugMode = false;

export const SettingName = "BCRevampLilianSetting";
export const DataKeyName = "BCRevampLilianData";

export const CUSTOM_ACTION_TAG = "SSCustomAction";