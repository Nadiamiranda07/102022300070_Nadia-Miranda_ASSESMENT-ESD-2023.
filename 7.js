function dekripsiChat(chat) {
    let hasilDekripsi = '';

    for (let i = 0; i < chat.length; i++) {
        let char = chat[i];

        // Mengecek huruf kecil
        if (char >= 'a' && char <= 'z') {
            char = String.fromCharCode(((char.charCodeAt(0) - 97 - 5 + 26) % 26) + 97);
        }
        // Mengecek huruf besar
        else if (char >= 'A' && char <= 'Z') {
            char = String.fromCharCode(((char.charCodeAt(0) - 65 - 5 + 26) % 26) + 65);
        }

        hasilDekripsi += char;
    }

    return hasilDekripsi;
}

const isiChatEks = "xfqfr bfmdz\ngjxtp lzj rfz ifkyfw jxi snm\ngwt, gjxtp qz rfz rfpfs in bfwlty lfp?\nfpz xfdfsl pfrz, rfz lfp ofin ufhfwpz\ndfsl pnwnr xynhpjw otrtp pz pnhp ifwn lwzu";

const isiChatDekripsi = dekripsiChat(isiChatEks);

console.log(isiChatDekripsi);
