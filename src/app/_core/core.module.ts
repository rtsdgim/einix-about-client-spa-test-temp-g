import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HttpClientModule } from '@angular/common/http';


@NgModule({
    imports: [
        BrowserAnimationsModule,
        // HttpClientModule
    ]
})
export class CoreModule {
    /**
     * Example - NgModules
     * https://stackblitz.com/angular/vbpoadpegql?file=src%2Fapp%2Fcore%2Fcore.module.ts
     */
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
