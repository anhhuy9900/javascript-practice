function ensureHttpPrefix(url) {
    // Use a regular expression to check if the URL starts with "http://" or "https://"
    if (!/^(http|https):\/\//.test(url)) {
        return "http://" + url;
    }
    return url;
}

// Example usage
const url1 = "172.16.1.251:1111";
const url2 = "https://www.example.com";

const fixedUrl1 = ensureHttpPrefix(url1);
const fixedUrl2 = ensureHttpPrefix(url2);

console.log(fixedUrl1); // Output: http://172.16.1.251:1111
console.log(fixedUrl2); // Output: https://www.example.com 