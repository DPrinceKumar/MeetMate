export interface MeetMateDataList{
    userName:string;
    fullName:string;
    email:string;
    profileImageUrl:string;
    profileImageAlt:string;
    postFeed:string;
    postFeedAlt:string;
    comments:string;
    commentCount:number;
    postDays:number;
    statusImg:string;
    statusbarAlt:string;
}
    // this.userList = [
    //   {
    //     username: '@abtdprincekumar',
    //     Full_name: 'Prince kumar',
    //     imageUrl:
    //       'https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png',
    //     imageUrlAlt: 'profile-Picture',
    //   },
    //   {
    //     username: '@pankaj2kumar56',
    //     Full_name: 'Pankaj kumar',
    //     imageUrl:
    //       'https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png',
    //     imageUrlAlt: 'profile-Picture',
    //   },
    //   {
    //     username: '@anuragSinghtT',
    //     Full_name: 'Anurag Singh tomar',
    //     imageUrl:
    //       'https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png',
    //     imageUrlAlt: 'profile-Picture',
    //   },
    // ];
    // this.feedCardDataList = [
    //   {
    //     profilePicture:
    //       'https://s.yimg.com/ny/api/res/1.2/_9cxvN3sUtbvORHBCgQPzg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2022-11/41dd6c70-5ac9-11ed-9b1f-d433e456385f',
    //     userName: 'Prince Kumar',
    //     feedImageUrl:
    //       'https://m.belfasttelegraph.co.uk/sport/football/world-cup/4fe23/42217500.ece/AUTOCROP/w620/WCup%20Netherlands%20Argentina%20Soccer',
    //     feedImageAlt: 'feed-Prince Kumar',
    //     comments: '😁🙌',
    //     commentCount: 30,
    //     daysAgoCount: 12,
    //   },
    //   {
    //     profilePicture:
    //       'https://s.yimg.com/ny/api/res/1.2/_9cxvN3sUtbvORHBCgQPzg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2022-11/41dd6c70-5ac9-11ed-9b1f-d433e456385f',
    //     userName: 'Pankaj Kuamr',
    //     feedImageUrl:
    //       'https://m.belfasttelegraph.co.uk/sport/football/world-cup/4fe23/42217500.ece/AUTOCROP/w620/WCup%20Netherlands%20Argentina%20Soccer',
    //     feedImageAlt: 'feed-Pankaj Kuamr',
    //     comments: '😁🙌',
    //     commentCount: 30,
    //     daysAgoCount: 12,
    //   },
    //   {
    //     profilePicture:
    //       'https://s.yimg.com/ny/api/res/1.2/_9cxvN3sUtbvORHBCgQPzg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2022-11/41dd6c70-5ac9-11ed-9b1f-d433e456385f',
    //     userName: 'Anuttar Jain',
    //     feedImageUrl:
    //       'https://m.belfasttelegraph.co.uk/sport/football/world-cup/4fe23/42217500.ece/AUTOCROP/w620/WCup%20Netherlands%20Argentina%20Soccer',
    //     feedImageAlt: 'feed-Anuttar Jain',
    //     comments: '😁🙌',
    //     commentCount: 30,
    //     daysAgoCount: 12,
    //   },
    //   {
    //     profilePicture:
    //       'https://s.yimg.com/ny/api/res/1.2/_9cxvN3sUtbvORHBCgQPzg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2022-11/41dd6c70-5ac9-11ed-9b1f-d433e456385f',
    //     userName: 'anurag Tomar',
    //     feedImageUrl:
    //       'https://m.belfasttelegraph.co.uk/sport/football/world-cup/4fe23/42217500.ece/AUTOCROP/w620/WCup%20Netherlands%20Argentina%20Soccer',
    //     feedImageAlt: 'feed-anurag Tomar',
    //     comments: '😁🙌',
    //     commentCount: 30,
    //     daysAgoCount: 12,
    //   },
    //   {
    //     profilePicture:
    //       'https://s.yimg.com/ny/api/res/1.2/_9cxvN3sUtbvORHBCgQPzg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2022-11/41dd6c70-5ac9-11ed-9b1f-d433e456385f',
    //     userName: 'Kishan Kumar',
    //     feedImageUrl:
    //       'https://m.belfasttelegraph.co.uk/sport/football/world-cup/4fe23/42217500.ece/AUTOCROP/w620/WCup%20Netherlands%20Argentina%20Soccer',
    //     feedImageAlt: 'feed-Kishan Kumar',
    //     comments: '😁🙌',
    //     commentCount: 30,
    //     daysAgoCount: 12,
    //   },
    //   {
    //     profilePicture:
    //       'https://s.yimg.com/ny/api/res/1.2/_9cxvN3sUtbvORHBCgQPzg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2022-11/41dd6c70-5ac9-11ed-9b1f-d433e456385f',
    //     userName: 'jhon lal',
    //     feedImageUrl:
    //       'https://m.belfasttelegraph.co.uk/sport/football/world-cup/4fe23/42217500.ece/AUTOCROP/w620/WCup%20Netherlands%20Argentina%20Soccer',
    //     feedImageAlt: 'feed-jhon lal',
    //     comments: '😁🙌',
    //     commentCount: 30,
    //     daysAgoCount: 12,
    //   },
    // ];
// this.statusDataList = [
    //   {
    //     imageSrc:
    //       'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg',
    //     userName: 'Prince kumar',
    //     imageAlt: 'Prince kumar',
    //   },
    //   {
    //     imageSrc:
    //       'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg',
    //     userName: 'Rahul kumar',
    //     imageAlt: 'Prince kumar',
    //   },
    //   {
    //     imageSrc:
    //       'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg',
    //     userName: 'khan Ali',
    //     imageAlt: 'Prince kumar',
    //   },
    //   {
    //     imageSrc:
    //       'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg',
    //     userName: 'jenyfer irne',
    //     imageAlt: 'Prince kumar',
    //   },
    //   {
    //     imageSrc:
    //       'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg',
    //     userName: 'pakia tak',
    //     imageAlt: 'Prince kumar',
    //   },
    //   {
    //     imageSrc:
    //       'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg',
    //     userName: 'Anuttar jain',
    //     imageAlt: 'Prince kumar',
    //   },
    //   {
    //     imageSrc:
    //       'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg',
    //     userName: 'anurag tomar',
    //     imageAlt: 'Prince kumar',
    //   },
    //   {
    //     imageSrc:
    //       'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg',
    //     userName: 'Prince kumar',
    //     imageAlt: 'Prince kumar',
    //   },
    //   {
    //     imageSrc:
    //       'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg',
    //     userName: 'Prince kumar',
    //     imageAlt: 'Prince kumar',
    //   },
    //   {
    //     imageSrc:
    //       'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg',
    //     userName: 'Prince kumar',
    //     imageAlt: 'Prince kumar',
    //   },
    //   {
    //     imageSrc:
    //       'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg',
    //     userName: 'Prince kumar',
    //     imageAlt: 'Prince kumar',
    //   },
    //   {
    //     imageSrc:
    //       'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg',
    //     userName: 'Prince kumar',
    //     imageAlt: 'Prince kumar',
    //   },
    // ];