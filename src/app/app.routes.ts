import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { NewsComponent } from './news/news.component';
import { MoreThanGamesComponent } from './more-than-games/more-than-games.component';
import { HelppComponent } from './helpp/helpp.component';
import { PrivateComponent } from './private/private.component';
import { DagaComponent } from './daga/daga.component';
import { LoginComponent } from './login/login.component';
import { GetComponent } from './get/get.component';
import { ShadowComponent } from './shadow/shadow.component';
import { MirageComponent } from './mirage/mirage.component';
import { ValhallaComponent } from './valhalla/valhalla.component';
import { OdysseyComponent } from './odyssey/odyssey.component';
import { AssassinCreedComponent } from './assassin-creed/assassin-creed.component';
import { AssassinCreedTwoComponent } from './assassin-creed-two/assassin-creed-two.component';
import { AssassinCreedBrotherhoodComponent } from './assassin-creed-brotherhood/assassin-creed-brotherhood.component';
import { AssassinCreedRevelationsComponent } from './assassin-creed-revelations/assassin-creed-revelations.component';
import { AssassinCreedThreeComponent } from './assassin-creed-three/assassin-creed-three.component';
import { AssassinCreedBlackFlagComponent } from './assassin-creed-black-flag/assassin-creed-black-flag.component';
import { AssassinCreedRogueComponent } from './assassin-creed-rogue/assassin-creed-rogue.component';
import { AssassinCreedUnitComponent } from './assassin-creed-unit/assassin-creed-unit.component';
import { AssassinCreedSyndicateComponent } from './assassin-creed-syndicate/assassin-creed-syndicate.component';
import { AssassinCreedOriginsComponent } from './assassin-creed-origins/assassin-creed-origins.component';
import { DetailsComponent } from './details/details.component';
import { CharactersComponent } from './characters/characters.component';
import { BuyGameComponent } from './buygame/buygame.component';
import { BasketComponent } from './basket/basket.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieComponent } from './movie/movie.component';
import { CallumComponent } from './callum/callum.component';
import { LinegardComponent } from './linegard/linegard.component';
import { EmbersComponent } from './embers/embers.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { QuizComponent } from './quiz/quiz.component';
import { TargetPracticeComponent } from './target-practice/target-practice.component';
import { MiniComponent } from './mini/mini.component';
import { ShopComponent } from './shop/shop.component';
import { ShopTopComponent } from './shop-top/shop-top.component';
import { OpinionComponent } from './opinion/opinion.component';
import { TrackingComponent } from './tracking/tracking.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ReturnComponent } from './return/return.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { PacketComponent } from './packet/packet.component';
import { SymphonicComponent } from './symphonic/symphonic.component';
import { AdvhomeComponent } from './advhome/advhome.component';
import { ProgramComponent } from './program/program.component';
import { TourComponent } from './tour/tour.component';
import { MediaComponent } from './media/media.component';
import { JourneyComponent } from './journey/journey.component';
import { TiketsComponent } from './tikets/tikets.component';
import { MyTicketsComponent } from './mytickets/mytickets.component';
import { FriendComponent } from './friend/friend.component';
import { ErrorComponent } from './error/error.component';










export const routes: Routes = [

    {path:'',component:HomeComponent, title:'home'},
    {path:'Games',component:GamesComponent, title:'Games'},
    {path:'News',component:NewsComponent,title:'News'},
    {path:'MoreThanGames',component:MoreThanGamesComponent,title:'MoreThanGames'},
    {path:'Helpp',component:HelppComponent,title:'Helpp'},
    {path:'private',component:PrivateComponent,title:'private'},
    {path:'daga',component:DagaComponent,title:'daga'},
    {path:'login',component:LoginComponent,title:'login'},
    {path:'get',component:GetComponent,title:'get'},
    {path:'shadow',component:ShadowComponent,title:'shadow'},
    {path:'mirage',component:MirageComponent,title:'mirage'},
    {path:'valhalla',component:ValhallaComponent,title:'valhalla'},
    {path:'odyssey',component:OdysseyComponent,title:'odyssey'},
    {path:'assassin-creed',component:AssassinCreedComponent,title:'assassin-creed'},
    {path:'assassin-creed-two',component:AssassinCreedTwoComponent,title:'assassin-creed-two'},
    {path:'assassin-creed-brotherhood',component:AssassinCreedBrotherhoodComponent,title:'assassin-creed-brotherhood'},
    {path:'assassin-creed-revelations',component:AssassinCreedRevelationsComponent,title:'assassin-creed-revelations'},
    {path:'assassin-creed-three',component:AssassinCreedThreeComponent,title:'assassin-creed-three'},
    {path:'assassin-creed-black-flag',component:AssassinCreedBlackFlagComponent,title:'assassin-creed-black-flag'},
    {path:'assassin-creed-rogue',component:AssassinCreedRogueComponent,title:'assassin-creed-rogue'},
    {path:'assassin-creed-unit',component:AssassinCreedUnitComponent,title:'assassin-creed-unit'},
    {path:'assassin-creed-syndicate',component:AssassinCreedSyndicateComponent,title:'assassin-creed-syndicate'},
    {path:'assassin-creed-origins',component:AssassinCreedOriginsComponent,title:'assassin-creed-syndicate'},
    {path:'details',component:DetailsComponent,},
    {path:'characters',component:CharactersComponent,title:'characters'},
    {path:'buygame',component:BuyGameComponent,title:'buygame'},
    { path: 'basket', component: BasketComponent },
    { path: 'dashboard', component: DashboardComponent, title: 'dashboard' },
    {path: 'movie',component:MovieComponent},
    {path:'callum', component:CallumComponent},
    {path:'linegard',component:LinegardComponent},
    {path:'embers',component:EmbersComponent},
    {path:'chatbot',component:ChatbotComponent},
    {path:'quiz',component:QuizComponent},
    {path:'target',component:TargetPracticeComponent},
    {path:'mini',component:MiniComponent},
    {path:'shop',component:ShopComponent},
    {path:'shop-top',component:ShopTopComponent},
    { path: 'opinion', component: OpinionComponent },
    {path:'traking',component:TrackingComponent},
    {path:"faqs",component:FaqsComponent},
    {path:'return',component:ReturnComponent},
    {path:'contactme',component:ContactmeComponent},
    {path:'aboutme',component:AboutmeComponent},
    {path:'packet',component:PacketComponent},
    {path:'symphonic',component:SymphonicComponent},
    {path:'advhome',component:AdvhomeComponent},
    {path:'program',component:ProgramComponent},
    {path:'tour',component:TourComponent},
    {path:'media',component:MediaComponent},
    {path:'journey',component:JourneyComponent},
    {path:'tikets',component:TiketsComponent,title:'tikets'},
    {path:'mytickets',component:MyTicketsComponent},
    {path:'friend',component:FriendComponent},
    { path: '**', component: ErrorComponent },
    {path:'error',component:ErrorComponent},
    { 
        path: '**', 
        redirectTo: '/error', 
        pathMatch: 'full' 
      },
   
  

    
    
    
    


];
