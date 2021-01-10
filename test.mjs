/*
Team ID
    
Name:test1
Key ID:JD7BXYK26S
Services:Apple Push Notifications service (APNs)
Token
    AuthKey_JD7BXYK26S.p8
    を設定

Bundle Identity を変更
    jp.jig.fukuno.MinimalRemoteNotificationSample

Device Token (Mac)
    ed58fb9c20efa25c04225ded85cfbda880525b9b2475ed3008d02f9bc77795c4
Device Token (iPhone)
    98d9192c0b518420d35daf5078d70bbe741bae18f9f3f4a997bc357f59981ed1

*/
// https://github.com/node-apn/node-apn

import apn from "apn";

const teamId = "A2TF2C92PA";
const keyId = "JD7BXYK26S";
const key = "./AuthKey_JD7BXYK26S.p8";
const production = false; // production or sand box

const appBundleId = "jp.jig.fukuno.MinimalRemoteNotificationSample";
const deviceToken = "9a8dd6fd4d92c38619e5a8afd85a83f6201bd46c265a08e6066c28a2b3c599b3"; // iPhone
//const deviceToken = "ed58fb9c20efa25c04225ded85cfbda880525b9b2475ed3008d02f9bc77795c4"; // mac minimalremote

//const appBundleId = "jp.jig.fukuno.RichPush"; // Wender
//const deviceToken = "7e0bf945f26266dfcf848128ce33d9f47d6de548efc8e6fc2d207fae3edd2f1f"; // Wondercast

const provider = new apn.Provider({ token: { key, keyId, teamId }, production });

const note = new apn.Notification();
//note.expiry = Math.floor(Date.now() / 1000) + 3600; // Expires 1 hour from now.
note.expiry = Math.floor(Date.now() / 1000) + 1; // Expires 1 min from now.
note.badge = 1; // バッジの数、指定しないと変化なし
note.sound = "ping.aiff"; // 音 ping:ピボピン
note.alert = { "title": "お知らせ", "subtitle": "サブ", "body" : "テストテストテストテストテストテストテストテストテストテストテスト" };
note.mutableContent = 1; // for rich push
const url = "https://fukuno.jig.jp/ced2.jpg";
// "https://img.sabae.cc/data/20210109/8f13b1d4-6d90-4763-b184-325aee5eb7da.png"
//note.payload = { data: { url } };
note.payload = { "image_url": url, "image_title": "test" };
//note.payload = { "podcast-image": url, "podcast-guest": "tt" };
note.topic = appBundleId;
const result = await provider.send(note, deviceToken);
console.log(result);

provider.shutdown();
//console.log(0);
process.exit(0);

