import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  // enableProdMode(); // Descomenta si importas enableProdMode de @angular/core
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));