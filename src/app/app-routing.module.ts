import { PreloadAllModules, Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from 'src/app/features/home/home.component';
import { FeedResolver } from 'src/app/core/feed-resolver';

const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
    resolve: { resolved: FeedResolver },
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
