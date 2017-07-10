import {  
    Http  
} from '@angular/http';  
import {  
    Component,  
    OnInit  
} from '@angular/core';  
import {  
    ArticleService  
} from './ArticleService';  
import {  
    Observable  
} from 'rxjs/Rx';  
import {  
    IArticle  
} from './IAirticle'; 

@Component({  
    selector: 'my-app',
    providers: [ArticleService],
    templateUrl: './app.component.html',  
    styleUrls: ['./app.component.css']  
})  
export class AppComponent implements OnInit { 

    title = 'Top 10 Companies';  
    articles: IArticle[];  
    errorMessage: string;  
    ///    
    constructor(private _articleService: ArticleService) {  
        this.articles = [];  
    }  
    ///    
    ngOnInit(): void {  
        let self = this;  
        self._articleService.getArticles().subscribe(response => this.articles = response, error => this.errorMessage = < any > error);  
    }  
}

