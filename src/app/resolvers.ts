import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { PostsService } from "./services/posts.service";
import { inject } from "@angular/core";
import { Post } from "./models/posts";
import { Observable } from "rxjs";

// https://stackoverflow.com/questions/76168417/i-get-resolve-as-strikethrough-in-my-angular-15-generated-project-how-can-i-sol

export const getPostsResolver: ResolveFn<Observable<Post[]>> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(PostsService).getPosts();
}
