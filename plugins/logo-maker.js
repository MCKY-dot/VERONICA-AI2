
//---------------------------------------------
//  ⚠️ DO NOT MODIFY THIS FILE ⚠️  
//---------------------------------------------
const { cmd, commands } = require('../command');
const axios = require('axios');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, sleep, fetchJson } = require('../lib/functions2');


const _0x5a3cc6=_0x19cb;function _0x19cb(_0x281c11,_0xfd0d97){const _0x3462bd=_0x357d();return _0x19cb=function(_0x27d45c,_0x246363){_0x27d45c=_0x27d45c-0x6c;let _0x357da8=_0x3462bd[_0x27d45c];if(_0x19cb['zJvqgk']===undefined){var _0x19cbb2=function(_0x592773){const _0x153945='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x4f30f3='',_0x383408='';for(let _0x175add=0x0,_0x3b2b95,_0x27ad8d,_0x3aee26=0x0;_0x27ad8d=_0x592773['charAt'](_0x3aee26++);~_0x27ad8d&&(_0x3b2b95=_0x175add%0x4?_0x3b2b95*0x40+_0x27ad8d:_0x27ad8d,_0x175add++%0x4)?_0x4f30f3+=String['fromCharCode'](0xff&_0x3b2b95>>(-0x2*_0x175add&0x6)):0x0){_0x27ad8d=_0x153945['indexOf'](_0x27ad8d);}for(let _0x4dfd1b=0x0,_0x370a54=_0x4f30f3['length'];_0x4dfd1b<_0x370a54;_0x4dfd1b++){_0x383408+='%'+('00'+_0x4f30f3['charCodeAt'](_0x4dfd1b)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x383408);};_0x19cb['HjDvyO']=_0x19cbb2,_0x281c11=arguments,_0x19cb['zJvqgk']=!![];}const _0x5226f6=_0x3462bd[0x0],_0x474a70=_0x27d45c+_0x5226f6,_0x3bfd6b=_0x281c11[_0x474a70];return!_0x3bfd6b?(_0x357da8=_0x19cb['HjDvyO'](_0x357da8),_0x281c11[_0x474a70]=_0x357da8):_0x357da8=_0x3bfd6b,_0x357da8;},_0x19cb(_0x281c11,_0xfd0d97);}(function(_0x3896c6,_0x401f0e){const _0x114af2=_0x19cb,_0x3ea659=_0x3896c6();while(!![]){try{const _0x243349=-parseInt(_0x114af2(0x98))/0x1+parseInt(_0x114af2(0x95))/0x2*(parseInt(_0x114af2(0x8d))/0x3)+-parseInt(_0x114af2(0x7f))/0x4*(parseInt(_0x114af2(0x8a))/0x5)+parseInt(_0x114af2(0x93))/0x6+parseInt(_0x114af2(0x7d))/0x7*(parseInt(_0x114af2(0x87))/0x8)+-parseInt(_0x114af2(0x81))/0x9*(parseInt(_0x114af2(0x75))/0xa)+parseInt(_0x114af2(0x7c))/0xb*(-parseInt(_0x114af2(0x6e))/0xc);if(_0x243349===_0x401f0e)break;else _0x3ea659['push'](_0x3ea659['shift']());}catch(_0x25a68d){_0x3ea659['push'](_0x3ea659['shift']());}}}(_0x357d,0x760a3));const _0x246363=(function(){let _0x569f14=!![];return function(_0x3970fb,_0xf4ee8a){const _0x345d38=_0x569f14?function(){const _0x274c49=_0x19cb;if(_0xf4ee8a){const _0x410eb5=_0xf4ee8a[_0x274c49(0x71)](_0x3970fb,arguments);return _0xf4ee8a=null,_0x410eb5;}}:function(){};return _0x569f14=![],_0x345d38;};}());(function(){const _0x391be5=_0x19cb,_0x42000c={'kniTC':_0x391be5(0x88),'FigYd':_0x391be5(0x74),'JBWsi':function(_0x2fef49,_0x1e978b){return _0x2fef49(_0x1e978b);},'BUtYL':'init','AXIlw':function(_0x3f9e5a,_0x8d6898){return _0x3f9e5a+_0x8d6898;},'TwqNw':_0x391be5(0x82),'UUtYx':_0x391be5(0x7a),'STXMj':function(_0x1d63e4,_0x2bbfad,_0x92d6ad){return _0x1d63e4(_0x2bbfad,_0x92d6ad);}};_0x42000c[_0x391be5(0x85)](_0x246363,this,function(){const _0x5cf815=_0x391be5,_0x274eb6=new RegExp(_0x42000c[_0x5cf815(0x92)]),_0x108894=new RegExp(_0x42000c['FigYd'],'i'),_0x5b9356=_0x42000c['JBWsi'](_0x27d45c,_0x42000c[_0x5cf815(0x78)]);!_0x274eb6[_0x5cf815(0x72)](_0x42000c['AXIlw'](_0x5b9356,_0x42000c[_0x5cf815(0x7e)]))||!_0x108894[_0x5cf815(0x72)](_0x42000c[_0x5cf815(0x7b)](_0x5b9356,_0x42000c[_0x5cf815(0x94)]))?_0x42000c[_0x5cf815(0x80)](_0x5b9356,'0'):_0x27d45c();})();}());const {anony}=require(_0x5a3cc6(0x8e));cmd({'pattern':'ba-logo','desc':'Create\x20a\x20Before-After\x20style\x20logo\x20with\x20two\x20text\x20elements','category':_0x5a3cc6(0x70),'react':'🔄','filename':__filename},async(_0x18ba01,_0x267eff,_0xbc23d9,{from:_0x2db5bd,args:_0x125a7b,reply:_0x25298e})=>{const _0xf69496=_0x5a3cc6,_0x430724={'eeXoe':function(_0x3b1db9,_0x36bf25){return _0x3b1db9(_0x36bf25);},'uWUwy':'❌\x20Please\x20provide\x20two\x20text\x20elements\x20separated\x20by\x20\x27|\x27.\x20Example:\x20ba-logo\x20Terri|Dev','bkBGd':function(_0x13eef5,_0x5c297e){return _0x13eef5<_0x5c297e;},'OyCCy':function(_0x2ff77d,_0x1952a3){return _0x2ff77d(_0x1952a3);}};try{if(!_0x125a7b['length'])return _0x430724[_0xf69496(0x77)](_0x25298e,_0x430724[_0xf69496(0x8c)]);const _0x58465a=_0x125a7b['join']('\x20'),_0x542ebc=_0x58465a['split']('|');if(_0x430724['bkBGd'](_0x542ebc[_0xf69496(0x83)],0x2))return _0x430724[_0xf69496(0x84)](_0x25298e,_0x430724[_0xf69496(0x8c)]);const _0xc207e1=_0x430724['eeXoe'](encodeURIComponent,_0x542ebc[0x0]['trim']()),_0x13a1bd=encodeURIComponent(_0x542ebc[0x1][_0xf69496(0x86)]()),_0x9b1ae6=_0xf69496(0x6f)+_0xc207e1+_0xf69496(0x96)+_0x13a1bd;await _0x18ba01['sendMessage'](_0x2db5bd,{'image':{'url':_0x9b1ae6},'caption':_0xf69496(0x73)+_0x542ebc[0x0][_0xf69496(0x86)]()+_0xf69496(0x76)+_0x542ebc[0x1][_0xf69496(0x86)]()});}catch(_0x35a735){return _0x25298e('*An\x20error\x20occurred\x20while\x20processing\x20your\x20request.*\x0a\x0a_Error:_\x20'+_0x35a735['message']);}});function _0x27d45c(_0x515ee6){const _0x11a661=_0x5a3cc6,_0x491ea8={'tEoAQ':function(_0xffc7bc,_0x3d6b63){return _0xffc7bc===_0x3d6b63;},'aiZng':'while\x20(true)\x20{}','AAmXJ':_0x11a661(0x91),'mAADj':function(_0x2b6531,_0x4b699d){return _0x2b6531!==_0x4b699d;},'vTHul':function(_0x587e17,_0x1c0bf9){return _0x587e17/_0x1c0bf9;},'HCyMF':function(_0x142169,_0x5332b5){return _0x142169%_0x5332b5;},'cFcTD':function(_0x589628,_0x261648){return _0x589628+_0x261648;},'wyOdw':'gger','NGQSc':'debu','qHyIY':'stateObject','CqINv':function(_0x4ad45c,_0x523ff9){return _0x4ad45c(_0x523ff9);},'jTVSW':function(_0x154092,_0x5e57f7){return _0x154092(_0x5e57f7);}};function _0x1f3162(_0x19f6b3){const _0x3b2cd1=_0x11a661;if(_0x491ea8[_0x3b2cd1(0x79)](typeof _0x19f6b3,_0x3b2cd1(0x89)))return function(_0x137707){}['constructor'](_0x491ea8[_0x3b2cd1(0x8f)])['apply'](_0x491ea8['AAmXJ']);else _0x491ea8['mAADj']((''+_0x491ea8['vTHul'](_0x19f6b3,_0x19f6b3))['length'],0x1)||_0x491ea8[_0x3b2cd1(0x90)](_0x19f6b3,0x14)===0x0?function(){return!![];}['constructor'](_0x491ea8[_0x3b2cd1(0x8b)]('debu',_0x491ea8['wyOdw']))[_0x3b2cd1(0x6c)](_0x3b2cd1(0x6d)):function(){return![];}['constructor'](_0x491ea8['NGQSc']+_0x491ea8['wyOdw'])['apply'](_0x491ea8[_0x3b2cd1(0x97)]);_0x491ea8['CqINv'](_0x1f3162,++_0x19f6b3);}try{if(_0x515ee6)return _0x1f3162;else _0x491ea8['jTVSW'](_0x1f3162,0x0);}catch(_0x3691a5){}}function _0x357d(){const _0x405208=['lI4VBgLIl3rLCNjP','ywLABMC','sen5tuy','y291BNrLCG','A25Pvem','mZy0nZe4nfDTtwTQzW','vvv0wxG','ntuZnfrsAKjQBq','jNrLEhrspq','CuH5svK','mtm5nJu1tw5IreTA','y2fSBa','ywn0Aw9U','mte5mduYCNniwhny','Ahr0Chm6lY9HCgKUBMvRB2XHyNmUBxKUAwqVy2fUDMfZl2jHlwXVz28/Dgv4DeW9','Bg9NBW','yxbWBhK','DgvZDa','4PYficPczwzVCMuTqwz0zxiGtg9NBYbdCMvHDgvKkGOktgvMDdOG','xcTCkYaQkd86w2eTEKeTwL8KxvSWltLHlxPblvPFjf0Qkq','mJbrB3rhAxG','cLjPz2H0oIa','zwvyB2u','qLv0wuW','DevVqve','Aw5WDxq','qvHjBhC','mZqXCvP0refs','mtm5nJu3shD2zxz6','vhDXtNC','mJHxs05wwge','sKjxC2K','mZi4ntu0AuDwzfnQ','y2HHAw4','BgvUz3rO','t3Ldq3K','u1rytwO','DhjPBq','mZa0ChjstwLr','zNvUy3rPB24GkLWOicPCkq','C3rYAw5N','mJC4ntq1tefWqNrI','y0zJveq','DvDvD3K','mZbXq1vkrwC'];_0x357d=function(){return _0x405208;};return _0x357d();}

cmd({
    pattern: "dragonball",
    desc: "Create a 3D Comic-style text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: 3dcomic Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "deadpool",
    desc: "Create a deadpool text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: 3dcomic Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-text-effects-in-the-style-of-the-deadpool-logo-818.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "blackpink",
    desc: "Create a blackpink text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: 3dcomic Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-a-blackpink-style-logo-with-members-signatures-810.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "neonlight",
    desc: "Create a neon light text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: neonlight Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "cat",
    desc: "Create a cat text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: cat Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/handwritten-text-on-foggy-glass-online-680.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "sadgirl",
    desc: "Create a sadgirl text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: sadgirl Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/write-text-on-wet-glass-online-589.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "pornhub",
    desc: "Create a pornhub text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: pornhub Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-pornhub-style-logos-online-free-549.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "naruto",
    desc: "Create a Naruto text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: naruto Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "thor",
    desc: "Create a Thor text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: thor Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-thor-logo-style-text-effects-online-for-free-796.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "america",
    desc: "Create  American text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: America Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "eraser",
    desc: "Create a Eraser text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: Eraser Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "3dpaper",
    desc: "Create a 3D Paper text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: 3dpaper Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "futuristic",
    desc: "Create a futuristic text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: futuristic Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/light-text-effect-futuristic-technology-style-648.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "clouds",
    desc: "Create a Clouds text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: Clouds Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "sans",
    desc: "Create a Sand text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: sand Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "galaxy",
    desc: "Create a Galaxy text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: galaxy Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "leaf",
    desc: "Create a Leaf text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: leaf Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/green-brush-text-effect-typography-maker-online-153.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "sunset",
    desc: "Create a sunset text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: sunset Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-sunset-light-text-effects-online-807.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "nigeria",
    desc: "Create a Nigeria text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: nigeria Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "devilwings",
    desc: "Create a Devil Wings. text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: devilwings Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/neon-devil-wings-text-effect-online-683.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "hacker",
    desc: "Create a Hacker text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: hacker Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "boom",
    desc: "Create a Boom text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: boom Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/boom-text-comic-style-text-effect-675.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "luxury",
    desc: "Create a Luxury  text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: luxury Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/floral-luxury-logo-collection-for-branding-616.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "zodiac",
    desc: "Create a 3D Comic-style text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: Zodiac Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-star-zodiac-wallpaper-mobile-604.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "angelwings",
    desc: "Create a Angel Wings text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: angelwings Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/angel-wing-effect-329.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "bulb",
    desc: "Create a Bulb text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: bulb Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/text-effects-incandescent-bulbs-219.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "tatoo",
    desc: "Create a Tatoo ext effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: Tatoo Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/make-tattoos-online-by-empire-tech-309.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "castle",
    desc: "Create a  Castle text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: castle Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-a-3d-castle-pop-out-mobile-photo-effect-786.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "frozen",
    desc: "Create a Frozen text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: frozen Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-a-frozen-christmas-text-effect-online-792.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "paint",
    desc: "Create a Paint text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: paint Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-3d-colorful-paint-text-effect-online-801.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "birthday",
    desc: "Create a Birthdaytext effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: birthday Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/beautiful-3d-foil-balloon-effects-for-holidays-and-birthday-803.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "typography",
    desc: "Create a Typography text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: Typography Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-typography-status-online-with-impressive-leaves-357.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "bear",
    desc: "Create a Bear text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: bear Empire");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/free-bear-logo-maker-online-673.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "valorant",
    desc: "Create a Valorant YouTube banner with three text inputs",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, quoted, prefix, args, reply }) => {
    try {
        if (args.length < 3) {
            return reply(`❌ Please provide 3 text inputs. Example:\n${prefix}valorant Text1 Text2 Text3`);
        }

        // Extract the three text inputs
        const text1 = args[0];
        const text2 = args[1];
        const text3 = args.slice(2).join(" ");

        // Build the API URL
        const apiUrl = `https://api.nexoracle.com/ephoto360/valorant-youtube-banner?apikey=MepwBcqIM0jYN0okD&text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}&text3=${encodeURIComponent(text3)}`;

        // Fetch the logo as a buffer
        const buffer = await getBuffer(apiUrl); // Ensure this gets image data

        // Send the image with the buffer data and include the quoted message if it exists
        const options = quoted ? { quoted: anony } : {};

        // Send the Valorant YouTube banner as an image
        await conn.sendMessage(from, {
            image: buffer, 
            caption: "Here is your Valorant YouTube banner!"
        }, options);
    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

