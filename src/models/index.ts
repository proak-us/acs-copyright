import type { LicenseManager } from "../package/license-manager";

declare global {
    interface Window {
        app: {
            licenseManager?: LicenseManager;
        }
    }
}
