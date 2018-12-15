import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from 'app/models/post.model';
import { PostsService } from 'app/services/posts.service';

@Component({
    selector: 'app-table-list',
    templateUrl: './table-list.component.html',
    styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

    public posts$: Observable<IPost[]>;

    public note: string;

    public warn: string;

    constructor(
        private postService: PostsService
    ) {
        this.posts$ = this.postService.getPosts();
    }

    ngOnInit() {
    }

    public deletePost(post: IPost): void {
        this.postService
            .removePost(post._id)
            .subscribe(
                res => {
                    this.warn = 'Вы Удалил пост!';
                },
                err => {
                    this.note = err.message;
                }
            );
    }

    public hideNote(): void {
        this.note = null;
        this.warn = null;
    }

}
