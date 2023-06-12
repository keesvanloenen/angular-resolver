import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { getPostsResolver } from './resolvers';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'posts',
    component: PostListComponent,
    resolve: { posts: getPostsResolver },
  },
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
