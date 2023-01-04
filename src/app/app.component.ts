import { Component, OnInit } from '@angular/core';
import { MeetMateDataList } from './MeetMateData';
// import { StatusService } from './services/status.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'chitChat';
  data: MeetMateDataList[];
  data2: any;

  // for (let index = 0;index < this.data2.data.user.edge_owner_to_timeline_media.edges.length;index++) {
  //   console.log(this.data2.data.user.edge_owner_to_timeline_media.edges[index].node.id);
  // }
  // constructor(private meetMate: StatusService) {
  //   // console.log('meetMateData', meetMate);
  //   meetMate.status().subscribe((data) => {
  //     this.data2 = data;
  //     console.log(
  //       'this.data2',
  //       this.data2.data.user.edge_owner_to_timeline_media.edges[0].node
  //     );
  //   });
  // }
  constructor() {}
  ngOnInit(): void {
    this.data = [
      {
        _id: '63a44654372dfbe3e8e875a0',
        index: 0,
        isActive: false,
        userName: 'EllisWright',
        fullName: 'Jennings Fernandez',
        gender: 'male',
        email: 'jenningsfernandez@tourmania.com',
        profileImageUrl:
          'https://b.fssta.com/uploads/application/soccer/headshots/885.vresize.350.350.medium.14.png',
        profileImageAlt: 'Mollie profile image',
        postFeed:
          'https://e0.365dm.com/22/12/768x432/skysports-cristiano-ronaldo_6009812.jpg',
        postFeedAlt: "Charity 's feeds",
        comments:
          'Officia laboris mollit ad deserunt amet voluptate aliqua Lorem cupidatat magna incididunt ipsum anim. Deserunt adipisicing velit quis ad magna consequat enim ex magna tempor. Nisi et ex occaecat enim minim irure est nisi.\r\nOfficia laboris mollit ad deserunt amet voluptate aliqua Lorem cupidatat magna incididunt ipsum anim. Deserunt adipisicing velit quis ad magna consequat enim ex magna tempor. Nisi et ex occaecat enim minim irure est nisi.\r\nOfficia laboris mollit ad deserunt amet voluptate aliqua Lorem cupidatat magna incididunt ipsum anim. Deserunt adipisicing velit quis ad magna consequat enim ex magna tempor. Nisi et ex occaecat enim minim irure est nisi.\r\nOfficia laboris mollit ad deserunt amet voluptate aliqua Lorem cupidatat magna incididunt ipsum anim. Deserunt adipisicing velit quis ad magna consequat enim ex magna tempor. Nisi et ex occaecat enim minim irure est nisi.\r\nOfficia laboris mollit ad deserunt amet voluptate aliqua Lorem cupidatat magna incididunt ipsum anim. Deserunt adipisicing velit quis ad magna consequat enim ex magna tempor. Nisi et ex occaecat enim minim irure est nisi.\r\nOfficia laboris mollit ad deserunt amet voluptate aliqua Lorem cupidatat magna incididunt ipsum anim. Deserunt adipisicing velit quis ad magna consequat enim ex magna tempor. Nisi et ex occaecat enim minim irure est nisi.\r\nOfficia laboris mollit ad deserunt amet voluptate aliqua Lorem cupidatat magna incididunt ipsum anim. Deserunt adipisicing velit quis ad magna consequat enim ex magna tempor. Nisi et ex occaecat enim minim irure est nisi.\r\nOfficia laboris mollit ad deserunt amet voluptate aliqua Lorem cupidatat magna incididunt ipsum anim. Deserunt adipisicing velit quis ad magna consequat enim ex magna tempor. Nisi et ex occaecat enim minim irure est nisi.\r\nOfficia laboris mollit ad deserunt amet voluptate aliqua Lorem cupidatat magna incididunt ipsum anim. Deserunt adipisicing velit quis ad magna consequat enim ex magna tempor. Nisi et ex occaecat enim minim irure est nisi.\r\n',
        commentCount: 17,
        postDays: 0,
        statusImg:
          'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202301/cristiano_ronaldo-sixteen_nine.jpg?VersionId=W8wcv9WPjUfQahSppcNMdUxAinqb7KJk',
        statusbarAlt: "Barron's status",
      },
      {
        _id: '63a4465487239b1c8ad59a91',
        index: 1,
        isActive: true,
        userName: 'SheliaFlores',
        fullName: 'Sofia Ruiz',
        gender: 'female',
        email: 'sofiaruiz@tourmania.com',
        profileImageUrl:
          'https://s.yimg.com/ny/api/res/1.2/_9cxvN3sUtbvORHBCgQPzg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2022-11/41dd6c70-5ac9-11ed-9b1f-d433e456385f',
        profileImageAlt: 'Bird profile image',
        postFeed:
          'https://m.belfasttelegraph.co.uk/sport/football/world-cup/4fe23/42217500.ece/AUTOCROP/w620/WCup%20Netherlands%20Argentina%20Soccer',
        postFeedAlt: "Savage 's feeds",
        comments:
          'Voluptate excepteur eu velit sit ad commodo esse nisi adipisicing. Officia exercitation esse anim occaecat sint. Do do voluptate pariatur officia fugiat consequat ea qui reprehenderit nisi sunt velit. Excepteur id commodo cupidatat proident consequat minim labore esse qui minim fugiat sit amet. Qui ex Lorem qui velit et dolor sint deserunt enim ut aute. Deserunt incididunt ad non officia fugiat cupidatat laborum labore sunt aute veniam aute. Qui irure nisi qui cupidatat.\r\n',
        commentCount: 12,
        postDays: 1,
        statusImg:
          'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg',
        statusbarAlt: "Gabriela's status",
      },
      {
        _id: '63a44654d183363efed967ea',
        index: 2,
        isActive: false,
        userName: 'CoteMills',
        fullName: 'Rhodes Santana',
        gender: 'male',
        email: 'rhodessantana@tourmania.com',
        profileImageUrl:
          'https://s.yimg.com/ny/api/res/1.2/_9cxvN3sUtbvORHBCgQPzg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2022-11/41dd6c70-5ac9-11ed-9b1f-d433e456385f',
        profileImageAlt: 'Skinner profile image',
        postFeed:
          'https://m.belfasttelegraph.co.uk/sport/football/world-cup/4fe23/42217500.ece/AUTOCROP/w620/WCup%20Netherlands%20Argentina%20Soccer',
        postFeedAlt: "Rosalyn 's feeds",
        comments:
          'Occaecat do pariatur velit do eiusmod amet adipisicing voluptate cillum incididunt laboris. Ea minim cupidatat mollit nisi quis reprehenderit do minim dolor est ut. Aute deserunt commodo do Lorem eiusmod eiusmod irure irure officia nulla ex ex ut. Laboris eiusmod laborum labore tempor eiusmod aute aute duis cillum sit adipisicing consequat. Veniam dolor minim velit excepteur magna officia cupidatat enim consequat. Consequat id proident tempor nulla. Non velit eiusmod esse fugiat.\r\n',
        commentCount: 36,
        postDays: 2,
        statusImg:
          'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg',
        statusbarAlt: "Lewis's status",
      },
      {
        _id: '63a44654b9c4b979905c4d07',
        index: 3,
        isActive: false,
        userName: 'TrevinoWebster',
        fullName: 'Rosa Trujillo',
        gender: 'female',
        email: 'rosatrujillo@tourmania.com',
        profileImageUrl:
          'https://s.yimg.com/ny/api/res/1.2/_9cxvN3sUtbvORHBCgQPzg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2022-11/41dd6c70-5ac9-11ed-9b1f-d433e456385f',
        profileImageAlt: 'Lessie profile image',
        postFeed:
          'https://m.belfasttelegraph.co.uk/sport/football/world-cup/4fe23/42217500.ece/AUTOCROP/w620/WCup%20Netherlands%20Argentina%20Soccer',
        postFeedAlt: "Miranda 's feeds",
        comments:
          'Nostrud aute dolor adipisicing est ex non exercitation aliquip nulla aliquip nostrud. Ut ut Lorem cillum elit. Elit aute ea est elit sit. Pariatur labore anim id eu. Aliqua laboris laborum est voluptate laboris officia nisi ea officia.\r\n',
        commentCount: 24,
        postDays: 3,
        statusImg:
          'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg',
        statusbarAlt: "Jimenez's status",
      },
      {
        _id: '63a4465428845e3b8a101bc3',
        index: 4,
        isActive: true,
        userName: 'ShortCortez',
        fullName: 'Valencia Rosa',
        gender: 'male',
        email: 'valenciarosa@tourmania.com',
        profileImageUrl:
          'https://s.yimg.com/ny/api/res/1.2/_9cxvN3sUtbvORHBCgQPzg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2022-11/41dd6c70-5ac9-11ed-9b1f-d433e456385f',
        profileImageAlt: 'Carol profile image',
        postFeed:
          'https://m.belfasttelegraph.co.uk/sport/football/world-cup/4fe23/42217500.ece/AUTOCROP/w620/WCup%20Netherlands%20Argentina%20Soccer',
        postFeedAlt: "Sheppard 's feeds",
        comments:
          'Nisi ad mollit adipisicing esse proident deserunt dolore sint veniam anim aliqua. Et Lorem dolore sint laboris amet duis velit. Cillum cupidatat exercitation duis exercitation. Adipisicing Lorem enim commodo elit voluptate quis velit laborum. Fugiat in duis sint aliqua velit minim eu excepteur Lorem.\r\n',
        commentCount: 15,
        postDays: 4,
        statusImg:
          'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg',
        statusbarAlt: "Sharlene's status",
      },
      {
        _id: '63a44654fcea7a927a912cfd',
        index: 5,
        isActive: false,
        userName: 'CaseyStark',
        fullName: 'Bruce Dickerson',
        gender: 'male',
        email: 'brucedickerson@tourmania.com',
        profileImageUrl:
          'https://s.yimg.com/ny/api/res/1.2/_9cxvN3sUtbvORHBCgQPzg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2022-11/41dd6c70-5ac9-11ed-9b1f-d433e456385f',
        profileImageAlt: 'Ola profile image',
        postFeed:
          'https://m.belfasttelegraph.co.uk/sport/football/world-cup/4fe23/42217500.ece/AUTOCROP/w620/WCup%20Netherlands%20Argentina%20Soccer',
        postFeedAlt: "Miriam 's feeds",
        comments:
          'Elit laborum ad ullamco adipisicing sunt magna cupidatat enim. Minim do consequat exercitation cupidatat laborum ad sunt aute ullamco irure commodo ea commodo magna. Id qui adipisicing ullamco id consectetur minim.\r\n',
        commentCount: 25,
        postDays: 5,
        statusImg:
          'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg',
        statusbarAlt: "Araceli's status",
      },
      {
        _id: '63a44654affda2c301988c92',
        index: 6,
        isActive: true,
        userName: 'DeidreTurner',
        fullName: 'Sargent Burt',
        gender: 'male',
        email: 'sargentburt@tourmania.com',
        profileImageUrl:
          'https://s.yimg.com/ny/api/res/1.2/_9cxvN3sUtbvORHBCgQPzg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2022-11/41dd6c70-5ac9-11ed-9b1f-d433e456385f',
        profileImageAlt: 'Brianna profile image',
        postFeed:
          'https://m.belfasttelegraph.co.uk/sport/football/world-cup/4fe23/42217500.ece/AUTOCROP/w620/WCup%20Netherlands%20Argentina%20Soccer',
        postFeedAlt: "Knox 's feeds",
        comments:
          'Veniam ullamco esse deserunt enim adipisicing consectetur occaecat amet ullamco cupidatat nisi ex dolore Lorem. Esse culpa sint nulla ea. Duis aliquip cillum excepteur incididunt dolore reprehenderit Lorem amet laborum aliquip.\r\n',
        commentCount: 34,
        postDays: 6,
        statusImg:
          'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg',
        statusbarAlt: "Melisa's status",
      },
      {
        _id: '63a4465486f73b14a851d863',
        index: 7,
        isActive: false,
        userName: 'HutchinsonBright',
        fullName: 'Nellie Wiley',
        gender: 'female',
        email: 'nelliewiley@tourmania.com',
        profileImageUrl:
          'https://s.yimg.com/ny/api/res/1.2/_9cxvN3sUtbvORHBCgQPzg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2022-11/41dd6c70-5ac9-11ed-9b1f-d433e456385f',
        profileImageAlt: 'Lily profile image',
        postFeed:
          'https://m.belfasttelegraph.co.uk/sport/football/world-cup/4fe23/42217500.ece/AUTOCROP/w620/WCup%20Netherlands%20Argentina%20Soccer',
        postFeedAlt: "Martin 's feeds",
        comments:
          'Deserunt elit officia elit nisi eu aliqua consectetur anim. Nisi proident aliquip amet ut laborum esse mollit sit nulla pariatur sit veniam pariatur. Irure adipisicing irure cupidatat elit esse exercitation ut Lorem in.\r\n',
        commentCount: 29,
        postDays: 7,
        statusImg:
          'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg',
        statusbarAlt: "Terrie's status",
      },
      {
        _id: '63a44654ab7835966a873d22',
        index: 8,
        isActive: false,
        userName: 'JoynerBridges',
        fullName: 'Park Langley',
        gender: 'male',
        email: 'parklangley@tourmania.com',
        profileImageUrl:
          'https://s.yimg.com/ny/api/res/1.2/_9cxvN3sUtbvORHBCgQPzg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2022-11/41dd6c70-5ac9-11ed-9b1f-d433e456385f',
        profileImageAlt: 'Doreen profile image',
        postFeed:
          'https://m.belfasttelegraph.co.uk/sport/football/world-cup/4fe23/42217500.ece/AUTOCROP/w620/WCup%20Netherlands%20Argentina%20Soccer',
        postFeedAlt: "Mayer 's feeds",
        comments:
          'Qui culpa irure sint ad. Elit incididunt cupidatat non occaecat. Est tempor tempor consequat non fugiat enim mollit elit tempor laboris cillum. Deserunt exercitation in est commodo cillum esse veniam exercitation excepteur voluptate ea adipisicing id consequat. Enim aliqua consectetur labore velit consectetur est eiusmod aliqua ipsum laboris aliqua officia consectetur labore. Quis tempor labore proident cillum. Enim amet nostrud cupidatat commodo dolor laboris occaecat cillum laboris ex amet deserunt.\r\n',
        commentCount: 27,
        postDays: 8,
        statusImg:
          'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg',
        statusbarAlt: "Knight's status",
      },
    ];
  }
}
