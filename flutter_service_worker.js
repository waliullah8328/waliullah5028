'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8ca9c09ade6d81274a2e3eb261c659a8",
".git/config": "97d539dad52330837d224eb14964f10a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f2cdb3cb5e6399f138aa73c9675ae7ce",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "900ec3421161d6c2ffa01d58feb5779b",
".git/logs/refs/heads/main": "900ec3421161d6c2ffa01d58feb5779b",
".git/logs/refs/remotes/origin/main": "b0a1edddc01e2ab3de218eb6f5116ebd",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/05/86224f701656e1d5831692f103ab5ecb59b4ec": "161b3e312ae5ed139dd2e60f42b147ab",
".git/objects/09/b5af19aca33910fef96dc0f09f4007cc27f45e": "e48fb53f95b57cd33b48f4ae4f1cd409",
".git/objects/0b/31185e5e2461e05d4f5e1741d653d99b196e37": "5b16cab2b48b524cbf201d789cc09356",
".git/objects/0c/946787506c47da696908cab7f5042bebab67f3": "6fb64f2e59210d6c414895479b20ad58",
".git/objects/13/f14efd6f9fa49693f985b5cf3d79b2185552ee": "c7b2009c103c9c1efdaea17803e0ac41",
".git/objects/14/0195c05e4e08ebd28b561c13701c1f9c5dc7bf": "19c0f74bfcac0e5e3b2a1d03c96a7c75",
".git/objects/15/6309ed977786373d8fdb045200bd94cf484888": "7d5766481130706b05ef1720d9789e6b",
".git/objects/17/eed1a550ce28ebfe8338aa35e3bfb3bc94ba87": "172a45f646ad5075b00256d7d7bf9913",
".git/objects/1a/830cb58d2a68746ca69a93bdb70d8d2a65016a": "e41703d3322d7aa440c169b797d0994b",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/83a5b12d313ccd5168224d8c468f6abd17609b": "0cfa20cdf41b091ecae6be8a2fce21b6",
".git/objects/2d/65f95ed7b744713d19942c85e4eae2a567bba8": "a17587ab775d13e7ad2538c93b7ca450",
".git/objects/31/8b207dc02af1ab878a0f75a2a85038979b6f7a": "381976856529851b2be49137b9e8d2c7",
".git/objects/32/deec44af26e43743979835da9eefd2ed245e60": "50a2d2231f65b32b0e46071b77e40c71",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/36/10a4c45cede83d643f7d49fe54c718de50315b": "51022f6893c1d9f9be175f028e532e7d",
".git/objects/37/83d2d655b94e93a00670679f33898760765912": "6bfa0458ff726659aa64c7b679fa688d",
".git/objects/37/e02d1c7da68bc41552f28b2e67d17039e80916": "5fc50528ea8b648c9e661ad494fd10f9",
".git/objects/38/7eaf92ac6868c3c3adb563164d97ad8967011d": "1412bed3f12877e0a05f7f6eeda8491c",
".git/objects/39/2efc951affe166269f6c0b1fe0c0988a98fb1a": "d9e95234a62af3b71948bc7780346ce3",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4e/7aef049d15135642fa5ce2f5aee406769ca387": "a318a9322d13afdb1d81326828e3011a",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/55/420c222e8c0ef2d639658a97a2923925470678": "716edcbf7b400ade819cb5dfd714f96a",
".git/objects/57/148844c67a1f88806c5d793e6316d0c7e15202": "9c3045a20501749026da73848b04c7e9",
".git/objects/57/182773829d353482388aec3412c89f8a112650": "eb5701c294d89b17e05b1d7d622d307f",
".git/objects/57/4c92bc1db362c66eea95def740126d4f5ac32f": "e30ab1729a0380dc9960e1fed37fe931",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/59/417cf491579ed85621cbbe1afcc2f95f06b448": "982791922829a02b2c124c3153c6fe9c",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/62/372e9841b56423f98d90e65da8963a22cc00ff": "699a0b33f753681c87af0aa0a34773ba",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6e/cdb6127fef41c5a24022e938429f1348934077": "5c7dec7fbdfb994ddd11d47fe893d45b",
".git/objects/76/de09c3542259f516008ce525e8702588b5452b": "60473cacc556e439b12d7194ff86b7c0",
".git/objects/79/331eacad827af39abf421877c64843778f4f56": "3e5b134f16116db8c0b3d633ffb5df6c",
".git/objects/79/9f15f33663e4234812eabb63f084c0b3df26da": "9346aab86abc37223ea3f6c255dd35ce",
".git/objects/79/f8da6746a491c16c106ccc45e4dd99f7351f91": "07768c621821b7e8e42e5ef5e259f63a",
".git/objects/7a/19e8603e87d361acc57c42c29716bacdcf5ee2": "91a855b4ccc8e2f32bb7be99e946021a",
".git/objects/7a/cdc4159df6c8132d58d3035e89545a3edabadd": "24611a8b1db2f4c000a0ede3cf775b11",
".git/objects/80/91c348d185bbe9032dd84d32b2c45a2a99866a": "e35be7d372efead91e736b6b919cfb58",
".git/objects/81/082723679588592a5a62401e758f1b88b05c72": "9f04beac6ea27e451b2f41f9c81855b9",
".git/objects/85/379e9fb05177f8cbaa292b440ef9aa6307cc1c": "1bdbe7d38a38b3c7fd8ac345c29be8d4",
".git/objects/88/854fb5203d80eccdb2c4c012eb1e52a8ffacb7": "dcbaf70c6ea136da84e32edb56bab6c5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/9515161ff5f4cea13e1799444b4bc471d293ee": "8ac4b8388e191d038116fff1c63aca22",
".git/objects/8f/f178b8886147e8e96b80bbcc8a6b692491bd20": "96fd6925523314b5c6863ddfb4546d4c",
".git/objects/90/f99e11c8a9135463aaaef915031e6bd9393337": "17ebd20b096c81916b30c8506d3492ea",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/95/aed65700de8bbf179e488f38db80a942ce06d7": "1a902f295d884992f283d3b45a9d1b8e",
".git/objects/97/96470f057fc4bd157f63e8e61707b769bec81b": "7848ac15c552cfb2f864c8d3804ba802",
".git/objects/98/cd9190454571d23ff0716fa532de3fb66e6ba9": "283e1cda8e1cc29f772de9c32e9ac5be",
".git/objects/9c/3beced683c4e6525317cce763446adcbdc9ca5": "963716b08dd2d1b06eb00c1441113604",
".git/objects/9d/472c10f89d253d44fdba9fabdd8ac2390bb955": "03742342ed5acc2ee8ed0dad4576fd0d",
".git/objects/a0/acc4238e879637b1b3187e3f4c41d5cfdd5a28": "7c63b1e097ed6c46b5e20d83840fed37",
".git/objects/a4/ac156359cd86c15925be541a15feabb0e9f843": "9e6d17f7173ec531a5df826821190500",
".git/objects/a5/4577c255dc36db5a424901344b1b5ef95c34c6": "c1b3c423876b655704d244251a212ff2",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/ae/8f0886cd0a022e8ada27b11e3dd16e93ae4357": "c3f2a3a472f820668e2aba59491613f3",
".git/objects/b1/4cc11399f583c327c67aa7711ac5bf6a0d3e6d": "239b3430220a0854303d199baba5322a",
".git/objects/b4/816aa30260da62e238cebb392922b2a7248399": "d2b9f2ff53edccdb388da587d0e1632c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/de258553aab1e388b43b28339cc7250ee14cb4": "174485620e6cff97f8e6f60f6e421d72",
".git/objects/bf/967bebb7507ed79b3a72e7f19f0bcd1af26999": "9a376d98ffc04c39f9680e064222870e",
".git/objects/c1/bedec7d95d003a6f7d9299d2e2d223354a344b": "2f54edcfdcb1df14e27e9d025c011b3d",
".git/objects/c5/b3dc5dd4d289bc7dadb840994f5e8caae48052": "936f5c0432093f2bab0602a10a02927f",
".git/objects/c7/c09f26f72549065652c2af836bd9a9fc8eba6f": "5dc59a0d6d1e393bda014f22a8f8c609",
".git/objects/c8/78325aa60904100eef8e64a872341d07bd85ce": "7af720d637fd897df9bbc651864c6a70",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/cf/5467d56edcd1df1fd6c55b91c1023c73b0e077": "f574a931fa869a63636e9532efa329d6",
".git/objects/d1/845a7463d2eb994f9eb73c2ee07627b973ccdc": "70b468c43ca0d300e40e2cdf4e126ebe",
".git/objects/d3/0174aade7a1ad60a096e52f4ae164aaf351627": "8353374295414b5f032a96fee2d77b3e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/f5658f7708e6738aa8af51886d18410e34d34f": "86364aca5518759da929e88cbf7968b6",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/de/b644c15c530ad0b1b8e0baeb7583c5fd6036d4": "d7d39a2cb97d9f664d22f8fdb41c125d",
".git/objects/de/f1304a016d32031529659a437bae1428345297": "f76ba2313289ca6c7deb3debd8b200bf",
".git/objects/df/951b3a7303df9f81fb2687d62f4ff1b81bdc71": "f0b66cd1bf013f2930f3b8681c429484",
".git/objects/e1/06aa8c53ce92959d91d70c2295446558b04ea2": "16e8d852a81331c485bbc31b9c4ad217",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/59527da340b1650c9dcedd7076adff2cd1fbbe": "4658e92f83504f18aeffc7e7d5ed6473",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f3/e9ea7f130a753fa8059abf479e491953b8160f": "4e870bd22a9a7bd5b7758d1104282b83",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fb/3ddddf743edfa2d280009b9a89f0c0c56f0984": "54ac5bb199eb893c0040de1775a170f3",
".git/objects/fc/4736c4e000f8f0359e88fc7edd39e5eb55246e": "f0e5d55f4a8da4580dc268ab69101e81",
".git/objects/fd/60a90f8b99170f6019dcee31a9bda357a6ec30": "25b2e492b00ff53c23dbc8c4d91eb0ab",
".git/objects/fe/b9f7211ab8d005fda37eaeb34c986eb47c89c8": "646edb1661d9768b26fef0530766312a",
".git/refs/heads/main": "51680047dfcec5bc483b4f2dabb9ed5f",
".git/refs/remotes/origin/main": "51680047dfcec5bc483b4f2dabb9ed5f",
"assets/AssetManifest.bin": "45ac99a88c6ae62cb5e9502c85df65b6",
"assets/AssetManifest.bin.json": "062acabb8493408844fcfa16017677f2",
"assets/AssetManifest.json": "ebba4f84e1425fa5d2e970f71e746c77",
"assets/assets/analytics.png": "610a95aedc2c0c32d1316562dc8ec248",
"assets/assets/api.png": "04f6f32e54dc381f25bfafd20f406292",
"assets/assets/app-store.png": "671cd61a346b8e679de2d8a6d4d44f4a",
"assets/assets/brush-stroke.png": "41854d93cc2b183ac9bf55e4b5097846",
"assets/assets/chat.png": "629250dbb57fc02a3a48ad17cc0b7e94",
"assets/assets/code_image.png": "ac28efc0800cec4caa046f05fbd54d90",
"assets/assets/coding.png": "af1b456dad3dd6f43f14994963b57316",
"assets/assets/cPlus.png": "8caa2a64cc9d8434b9590c7b8088adc5",
"assets/assets/dart_icon.png": "bb138dcb3ea534479219fe5bf9e47156",
"assets/assets/database.png": "4aa05a3268216e954778311328bf742b",
"assets/assets/face.png": "3e569c0b44e18cf4ac36c2f52ca2c4fc",
"assets/assets/flutter_icon.png": "0764a6445b112ed0d6291ace9d082344",
"assets/assets/getx.png": "de4888566257d4a3108dddbfd9b34d3f",
"assets/assets/git.png": "7b08b14f30c2110a685bafcd33e8a480",
"assets/assets/github.png": "3b952bb53145b9970a4ce4bc9d733372",
"assets/assets/in.png": "a65bf53ef6a1d1555120edfc1810f551",
"assets/assets/insta.png": "bd3f44e94e19e2cd2fed522e65f67657",
"assets/assets/loading.json": "41f15a49245d9de30c0a3df08b7bd66d",
"assets/assets/loadin_animation.json": "be5774e44e51001f3c1f6c2c632dc8da",
"assets/assets/me_image.jpg": "b1e74cf02651a7d1eec4bc20b22c58b4",
"assets/assets/paypal.png": "a727cb25c40d8ca4d37bbe6f9b3a546f",
"assets/assets/playstore.png": "3f9848c4e3a973d4fe098cf8e39b5b6e",
"assets/assets/pro1.png": "f91e33002ce86e607318f5751eb6b79e",
"assets/assets/pro2.png": "1f48a60f626470121ee767717aceda6a",
"assets/assets/provider.png": "a8a35a6c03b007136fb34ef29c5e1c50",
"assets/assets/share.png": "7d05af750cd03cdda7f247d7dc8b532e",
"assets/assets/stripe.png": "a06ef4dcd0dd12c0edfa03ad8f7c44ab",
"assets/assets/twit.png": "3f2b027c50dd30dd9abeeaeb1b68b1c3",
"assets/assets/video_audio_call.png": "545f9c3dcb671d5b99c11706bf4d7169",
"assets/assets/work1.jpg": "58bbc11e54a3643754df21fd0d1e59a8",
"assets/assets/work2.jpg": "8ac2eef16dd7a05a53702e965891c948",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e879094eafa97ad1720ed0990e6c478f",
"assets/NOTICES": "69e45443ba4624455e09b4e28f86ff86",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "a5747f16340555b37963d4620c943eb8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "29279bc931d59f39c7bb4946c1687460",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bf7aaf771b219fe9a81c32fd0c3cbafc",
"/": "bf7aaf771b219fe9a81c32fd0c3cbafc",
"main.dart.js": "74f3afd594186428c9821e926fdeee78",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "9b818ca9511483c901bed1545384376c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
