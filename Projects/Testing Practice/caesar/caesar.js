const a_code = 'a'.charCodeAt(0);
const A_code = 'A'.charCodeAt(0);

export function caesar(string, key) {
    let new_string = "";
    const shift = key % 26;
    
    let size = string.length
    for(let i = 0; i < size; i++) {
        let char = string[i];
        let char_code = char.charCodeAt(0);

        if(char >= 'a' && char <= 'z') {
            let distance = Math.abs(char_code - a_code);
            let new_char = String.fromCharCode(a_code + ((distance + shift) % 26));
            new_string += new_char;
        }
        else if(char >= 'A' && char <= 'Z') {
            let distance = Math.abs(char_code - A_code);
            let new_char = String.fromCharCode(A_code + ((distance + shift) % 26));
            new_string += new_char;
        }
    } 
    return new_string;
}