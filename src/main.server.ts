// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
// import { config } from './app/app.config.server';

// const bootstrap = () => bootstrapApplication(AppComponent, config);

// export default bootstrap;

import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

const bootstrap = (context: BootstrapContext | undefined) => bootstrapApplication(AppComponent, config, context);

export default bootstrap;


// import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
// import { config } from './app/app.config.server';
// import { provideServerRendering } from '@angular/platform-server';

// const bootstrap = (context: BootstrapContext | undefined) => {
//     return bootstrapApplication(AppComponent, {
//         ...config,
//         providers: [
//             provideServerRendering(),
//             ...(config.providers ?? []),
//         ],
//     }, context);
// };

// export default bootstrap;
