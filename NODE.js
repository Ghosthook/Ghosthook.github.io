var admin = require("firebase-admin");

var serviceAccount = require("/Users/kasperthornsten/Documents/AnimeForLifeTV/project02-77078-firebase-adminsdk-3lvz8-e72a539c14.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://project02-77078.firebaseio.com/"

});

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: "project02-77078",
    clientEmail: "firebase-adminsdk-3lvz8@project02-77078.iam.gserviceaccount.com"
    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDM6KYz/XzAifgZ\nOxV9hIZK27nRAOrAMb1F+BF8g7uKFrNHHfETVVKB2zGPdhF1SyZ3dWltZE8eCPJ5\nJSyUaHgCGDwy5gn/IjLeAKLbMoORDnqjzpJITr1ZoYf1jze4fJnbWtzUTTaULB23\nW948MieILLTeI3LPgJjn7Wy6vVo0AInKbXr7nlznJh3QqBpyQK5+XIaOTaBP0WiI\nqUfJqwmHpz+OTWod9Os5zFx2WdKQpzt6x9C+iZhLQr7wQjDrxnf8vZClK38xOxle\nHIM/5VdjLRZsBZ5nvLCac40GJbVDim45ehDLum0Ug+d+32fxopOui2ZY0KAnE9wK\nepwzGq3JAgMBAAECggEAHRBvyKaPHCFFvVBt3SqfwLz3V4+lfILhmavU0SA/SNgs\n8CytTeR3ij88waBJ3CT/bQjMni1Q8o3q1Kei8d76jLOC0GZkKxne9LHK58P7uObA\nmvz5L0Pp5C1/AyPgD60uxpgWBA/6qpwyT9h6RngHtu8+bVbCWW/gYF9DIZ6rjX34\nFEJEriqBoEpoUE6ZOYh2vHaf4Q0LEFlYoBjPly3bHYFxsL2ux8TSUWKucqwHbR12\ncz/3SnqSAZKed9/FTXHSuuQQpb2m24NPsmdF93O4dN7CIW+aGohzR7xTIA+ZEher\nAR+5mdOgp3IvC7Dc7bZm3zyltCM+ZDm6+igZf8VdvQKBgQDlNA1yhby5rizbINat\nQF75YBbpqhx+awCf5LzXptzVNyOxSxr4aiE96octHnhDP16jo5HjZqQn1l82YOgB\nsdsAedlbkjjBez4EWHOjp5HMKQku8/xP1QjpGEXWHWgj/EdQTW9Mr+d4YTOsCjzn\naoydOhHgHCuz984lwmbHFUxsPQKBgQDk3XjzeGcrHWDR3Y6BOCRG2Gh7btdtInVP\n5uiAaXysK4pfiyd/Its2qfbxaTtJn/sMDSYlWKvR+9JlWBS0VRO+0aAiteXbVPnn\nBLXa32hN4yhmZJgOgXKCUT60CpLPEJb6kS0YPYasDJ8ZP4cFceDQ6/fJnj0ZFq7f\nb33AeqpkfQKBgDOuBe4xm3kefby27dDIt+Fwuhnbomsaw1xKHg5d8GMe+KxMK/uh\nKnekfvA8c49uJW+uPQHSLedRncxME2P2b1PvJYRRNvzhRf2C2Cgpa2VmR0zP9K8n\ncMfmEjESFl4uzwGbRCI9c2qgOB9te4gObUAyTL+EepIsqM24xKXU9pNdAoGBALf1\npTDeiN7JAHfwRIltXQttC56bm6FnXzBYhG4jXEjvvovJyHeSxu2LdKjbUwJ9C0fG\nkfDW81UXuygmwo2pDPQGf1cnKplAFpcw3BQQG0Dv5BtZpDeUqTxCncoN7a9uwEyr\nwLmJSuSkSIX84ETqIjEMWuG+xZGTAAEtFsFOWAPpAoGALyrDLQmu4+QKaJzy/MbJ\nzGVnqAuF4y3BJxE22Kd56RNbsZcwK+ATwslD1rwUkWzLIaDxdfVCRn4uKGI1HK1m\n/a2Fv8wRJlYuSUlr2m4OfyzYuHzOrkwBpo/J5GRORs1I+B7inPj+FSvmqU0Zwgfl\n/YkpOUOAc4TDqhRD/pW/MxY=\n-----END PRIVATE KEY-----\n"
  }),
  databaseURL: "https://project02-77078.firebaseio.com/"
});

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://project02-77078.firebaseio.com/"
});

admin.initializeApp(functions.config().firebase);

var refreshToken; // Get refresh token from OAuth2 flow

admin.initializeApp({
  credential: admin.credential.refreshToken(refreshToken),
  databaseURL: "https://project02-77078.firebaseio.com/"
});

// Initialize the default app
var defaultApp = admin.initializeApp(defaultAppConfig);

console.log(defaultApp.name);  // "[DEFAULT]"

// Retrieve services via the defaultApp variable...
var defaultAuth = defaultApp.auth();
var defaultDatabase = defaultApp.database();

// ... or use the equivalent shorthand notation
defaultAuth = admin.auth();
defaultDatabase = admin.database();

// Initialize the default app
admin.initializeApp(defaultAppConfig);

// Initialize another app with a different config
var otherApp = admin.initializeApp(otherAppConfig, "other");

console.log(admin.app().name);  // "[DEFAULT]"
console.log(otherApp.name);     // "other"

// Use the shorthand notation to retrieve the default app's services
var defaultAuth = admin.auth();
var defaultDatabase = admin.database();

// Use the otherApp variable to retrieve the other app's services
var otherAuth = otherApp.auth();
var otherDatabase = otherApp.database();