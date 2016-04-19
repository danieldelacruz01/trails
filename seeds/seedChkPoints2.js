exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('checkpoints2').del(),

    knex('checkpoints2').insert({chkId:11, locationName: 'The Third Eye', description:'A drinking den',latitude:-41.297342, longitude: 174.774296,imgUrl: 'https://c1.staticflickr.com/3/2835/9088064883_27af8200b4_b.jpg',timeLimit:null, distanceInMetres:null, hint:'Old now new', trailId:2}),
    knex('checkpoints2').insert({chkId:12, locationName: 'Museum Building', description:'A show of education',latitude:-41.299518, longitude:174.776876 ,imgUrl: 'http://www.greatwarexhibition.nz/wp-content/uploads/2015/04/building.jpg',timeLimit:1000, distanceInMetres:750, hint:'For creatives', trailId:2}),
    knex('checkpoints2').insert({chkId:13, locationName: 'Public area', description:'Civilians view',latitude:-41.288517, longitude:174.776915,imgUrl: 'https://images.trvl-media.com/media/content/shared/images/travelguides/destination/6127327/City-Gallery-Wellington-58684.jpg',timeLimit:1000, distanceInMetres:1900, hint:'New in old', trailId:2}),
    knex('checkpoints2').insert({chkId:14, locationName: 'Does the public trust stout', description:'Trustie old building',latitude:-41.281175, longitude:174.7766100 ,imgUrl: 'http://www.stuff.co.nz/content/dam/images/1/6/8/0/p/8/image.related.StuffLandscapeSixteenByNine.620x349.167y4q.png/1438983762472.jpg',timeLimit:1200, distanceInMetres:900, hint:'lawyer cornered', trailId:2}),
    knex('checkpoints2').insert({chkId:15, locationName: 'St Georges cross', description:'The Beatles came here',latitude:-41.289151, longitude:174.774707 ,imgUrl: 'http://www.transpressnz.com/Wellingtontrams.jpg',timeLimit:400, distanceInMetres:950, hint:'At a cross roads', trailId:2}),
    knex('checkpoints2').insert({chkId:16, locationName: 'Ministry of BIE', description:'Stoic', latitude:-41.281183, longitude:174.776771,imgUrl: 'http://static2.stuff.co.nz/1375146904/174/8981174.jpg',timeLimit:500, distanceInMetres:1000, hint:'Like to spend', trailId:2}),
    knex('checkpoints2').insert({chkId:17, locationName: 'Cnr Willis and Lambton', description:'Old bank',latitude:-41.286329, longitude:174.776242 ,imgUrl: 'https://oldphotosnz.files.wordpress.com/2013/01/op_wgtn_0681.jpg?w=1400&h=&crop=1',timeLimit:400, distanceInMetres:650, hint:'Arcade', trailId:2}),
    knex('checkpoints2').insert({chkId:18, locationName: 'Dixon ', description:'St Hope-Gibbons',latitude:-41.290811, longitude:174.773828 ,imgUrl: 'http://wellington.scoop.co.nz/wp-content/uploads/2013/10/Hope-Gibbons-2.jpg',timeLimit:400, distanceInMetres:600, hint:'High flats', trailId:2}),
    knex('checkpoints2').insert({chkId:19, locationName: 'Tonks lived here', description:'Historical',latitude:-41.296905, longitude:174.773602 ,imgUrl: 'http://static2.stuff.co.nz/1385408447/548/9442548.jpg',timeLimit:700, distanceInMetres:750, hint:'Cottage pie', trailId:2}),
    knex('checkpoints2').insert({chkId:20, locationName: 'At its core its logical', description:'devs live here',latitude:-41.297342, longitude: 174.774296,imgUrl: 'http://wellington.scoop.co.nz/wp-content/uploads/2010/09/plaatje11.jpg',timeLimit:100, distanceInMetres:094, hint:'Here there and back again', trailId:2})
 );
};

