import { Component, OnInit, signal } from '@angular/core';
import { Testimonial } from '../../shared/testimonial/testimonial';
import { Hero } from '../../shared/hero/hero';
import { PostService } from '../../core/services/post/post-service';
import { Post } from '../../core/models/post';

@Component({
  selector: 'app-blog',
  imports: [Testimonial, Hero],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog implements OnInit{
    titre = `Blog`;
  description = "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.";
  cta1 = "Shop Now";
  cta2 = "Explore";
  image = "assets/images/couch.png";

 posts = signal<Post[] | any>([]);

  constructor(private postService:PostService){

  }
  ngOnInit(): void {
    this.postService.getAll().subscribe((response) => {
      console.log(response);
      this.posts.set(response.data)

      this.posts().forEach((element:Post) => {
        console.log(element.libelle)
      });

    },(error)=>{
      console.log("eror");
    })
  }
}
