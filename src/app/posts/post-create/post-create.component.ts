import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { PostsService } from '../posts.service';
import { Post } from '../post.model';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredContent = '';
  enteredTitle = '';
  post : Post;
  private mode = 'create';
  private postId : string;


  constructor(public postService: PostsService, public route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap : ParamMap) => {
      if (paramMap.has('postId')) {
        this.mode ='edit';
        this.postId = paramMap.get('postId');
        this.post = this.postService.getPost(this.postId);
      } else {
        this.mode = 'create';
        this.postId = null;
      }

    });
  }

  onSavePost(form: NgForm) {
    if (form.invalid){
      return;
    }

    if ( this.mode === 'create' ) {
      this.postService.addPosts(form.value.title, form.value.content);
    } else {
      this.postService.updatePost(this.postId,form.value.title,form.value.content);
    }

    form.resetForm();
  }
}
