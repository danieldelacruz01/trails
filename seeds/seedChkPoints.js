
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('checkpoints').del(),

    knex('checkpoints').insert({chkId:1, locationName: 'Bucket Fountain', description:'Bucket and water feature',latitude:-41.292196, longitude: 174.776364,imgUrl: 'http://www.stuff.co.nz/content/dam/images/1/a/5/m/t/v/image.related.StuffLandscapeSixteenByNine.620x349.1a2huc.png/1457654617914.jpg',timeLimit:null, distanceInMetres:null, hint:'Where is Hanava', trailId:1}),
    knex('checkpoints').insert({chkId:2, locationName: 'Public space', description:'Books and galleries',latitude:-41.288668, longitude: 174.777244,imgUrl: 'http://www.sculptures.org.nz/__data/assets/image/0003/1767/te-aho-a-maui.jpg',timeLimit:240, distanceInMetres:400, hint:'How civil of you', trailId:1}),
    knex('checkpoints').insert({chkId:3, locationName: 'On the waterfront', description:'Bronze statue',latitude:-41.288668, longitude:174.777244 ,imgUrl: 'http://www.weekendnotes.com/im/008/06/solace-in-the-wind-statue-art-wellington-waterfron.jpg',timeLimit:480, distanceInMetres:650, hint:'Not near Te Mama', trailId:1}),
    knex('checkpoints').insert({chkId:4, locationName: 'Theatre on Cambridge', description:'Tripod',latitude:-41.294373, longitude: 174.784174,imgUrl: 'https://macmantravels.files.wordpress.com/2012/03/well_tripod.jpg',timeLimit:540, distanceInMetres:650, hint:'Not in England', trailId:1}),
    knex('checkpoints').insert({chkId:5, locationName: 'A round about a reserve', description:'sounds like ticket',latitude:-41.300142, longitude:174.780456 ,imgUrl: 'http://static2.stuff.co.nz/1363406548/350/8435350.jpg',timeLimit:360, distanceInMetres:750, hint:'No flyovers here!', trailId:1}),
    knex('checkpoints').insert({chkId:6, locationName: 'Memorial', description:'Massive Monolith',latitude:-41.299271, longitude:174.776361 ,imgUrl: 'http://cdn.eventfinda.co.nz/uploads/locations/transformed/119918-5236-34.jpg',timeLimit:360, distanceInMetres:500, hint:'Students mill about', trailId:1}),
    knex('checkpoints').insert({chkId:7, locationName: 'Near where you are', description:'Historical houses',latitude:-41.296580, longitude:174.772576 ,imgUrl: 'http://www.regangentry.com/files/gimgs/5_2-2009-subject-to-change.jpg',timeLimit:660, distanceInMetres:900, hint:'One main rd out', trailId:1}),
    knex('checkpoints').insert({chkId:8, locationName: 'Back near the start', description:'A refreshment establishment',latitude:-41.292486, longitude:174.775880 ,imgUrl: 'http://cdn1.buuteeq.com/upload/24280/matterhorn_wellington_nz_credit_jesssilk_highres_cmyk-6.JPG.1920x810_default.jpeg',timeLimit:480, distanceInMetres: 700, hint:'Horns matter', trailId:1}),
    knex('checkpoints').insert({chkId:9, locationName: 'Museum of New Zealand', description:'Large marble ball',latitude: -41.290731, longitude: 174.781146,imgUrl: 'http://2.bp.blogspot.com/_IjSQ_ADksow/TH2tk6ZfmQI/AAAAAAAAKXU/bBBQyyGjCM4/s1600/WDP+ballslinedup.jpg',timeLimit:480, distanceInMetres:650, hint:'Floats in an entrance', trailId:1}),
    knex('checkpoints').insert({chkId:10, locationName: 'post and telegraph', description:'Historic Building',latitude:-41.290832, longitude:174.784614 ,imgUrl: 'http://2.bp.blogspot.com/-CuYZRaiKnOA/Tq_NXXuTgDI/AAAAAAAABSM/7MDpO07DYa0/s1600/post_and_telegraph3.jpg',timeLimit:360, distanceInMetres:500, hint:'Cant by stamps here anymore', trailId:1}),
    knex('checkpoints').insert({chkId:11, locationName: 'The Third Eye', description:'A drinking den',latitude:-41.297342, longitude: 174.774296,imgUrl: 'https://c1.staticflickr.com/3/2835/9088064883_27af8200b4_b.jpg',timeLimit:null, distanceInMetres:null, hint:'Old now new', trailId:2}),
    knex('checkpoints').insert({chkId:12, locationName: 'Museum Building', description:'A show of education',latitude:-41.299518, longitude:174.776876 ,imgUrl: 'http://www.greatwarexhibition.nz/wp-content/uploads/2015/04/building.jpg',timeLimit:1000, distanceInMetres:750, hint:'For creatives', trailId:2}),
    knex('checkpoints').insert({chkId:13, locationName: 'Public area', description:'Civilians view',latitude:-41.288517, longitude:174.776915,imgUrl: 'https://images.trvl-media.com/media/content/shared/images/travelguides/destination/6127327/City-Gallery-Wellington-58684.jpg',timeLimit:1000, distanceInMetres:1900, hint:'New in old', trailId:2}),
    knex('checkpoints').insert({chkId:14, locationName: 'Does the public trust stout', description:'Trustie old building',latitude:-41.281175, longitude:174.7766100 ,imgUrl: 'http://www.stuff.co.nz/content/dam/images/1/6/8/0/p/8/image.related.StuffLandscapeSixteenByNine.620x349.167y4q.png/1438983762472.jpg',timeLimit:1200, distanceInMetres:900, hint:'lawyer cornered', trailId:2}),
    knex('checkpoints').insert({chkId:15, locationName: 'St Georges cross', description:'The Beatles came here',latitude:-41.289151, longitude:174.774707 ,imgUrl: 'http://www.transpressnz.com/Wellingtontrams.jpg',timeLimit:400, distanceInMetres:950, hint:'At a cross roads', trailId:2}),
    knex('checkpoints').insert({chkId:16, locationName: 'Ministry of BIE', description:'Stoic', latitude:-41.281183, longitude:174.776771,imgUrl: 'http://static2.stuff.co.nz/1375146904/174/8981174.jpg',timeLimit:500, distanceInMetres:1000, hint:'Like to spend', trailId:2}),
    knex('checkpoints').insert({chkId:17, locationName: 'Cnr Willis and Lambton', description:'Old bank',latitude:-41.286329, longitude:174.776242 ,imgUrl: 'https://oldphotosnz.files.wordpress.com/2013/01/op_wgtn_0681.jpg?w=1400&h=&crop=1',timeLimit:400, distanceInMetres:650, hint:'Arcade', trailId:2}),
    knex('checkpoints').insert({chkId:18, locationName: 'Dixon ', description:'St Hope-Gibbons',latitude:-41.290811, longitude:174.773828 ,imgUrl: 'http://wellington.scoop.co.nz/wp-content/uploads/2013/10/Hope-Gibbons-2.jpg',timeLimit:400, distanceInMetres:600, hint:'High flats', trailId:2}),
    knex('checkpoints').insert({chkId:19, locationName: 'Tonks lived here', description:'Historical',latitude:-41.296905, longitude:174.773602 ,imgUrl: 'http://static2.stuff.co.nz/1385408447/548/9442548.jpg',timeLimit:700, distanceInMetres:750, hint:'Cottage pie', trailId:2}),
    knex('checkpoints').insert({chkId:20, locationName: 'At its core its logical', description:'devs live here',latitude:-41.297342, longitude: 174.774296,imgUrl: 'http://wellington.scoop.co.nz/wp-content/uploads/2010/09/plaatje11.jpg',timeLimit:100, distanceInMetres:094, hint:'Here there and back again', trailId:2})
  )
}
