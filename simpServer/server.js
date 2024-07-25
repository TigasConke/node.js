import http from 'http';

/*function handleRequest(req, res){
}
           OU
*/

const handleRequest = (req, res) => {
    
    if(req.method === 'GET' && req.url === '/') {

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>TUDO CERTO MEU CAMARADA</h1>');
        res.end();

    }

}

const server = http.createServer((req,res) => {

});
server.listen(3000);
console.log('SERVIDOR EM EXECUCAO');