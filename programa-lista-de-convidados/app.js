const readLine = require('readline').createInterface ({

        input : process.stdin, 
        output : process.stdout
    
});

    console.log('Esse programa vai checar se o seu nome consta em nossa Lista de convidados');
    console.log(' ** Para entrar no evento é necessario ser maior de 18 anos, ou estar acompanhado de um responsável ** ');

 readLine.question('Qual é o seu nome?', nome => {

                        switch(nome){
                                
                            case'Osvaldo' :
                                console.log('Seja bem vindo ao evento, Osvaldo');
                                break;
                            case 'João' :
                                console.log('Seja bem vindo ao evento, João');
                                break;
                             case 'José' :
                                 console.log("Seja bem vindo ao evento, José");
                        
                                 
                     
                        default:  console.log('Seu nome não consta em nossa lista de convidados! Faça o seu Cadastro!'); 
                            
                        }
                        
            
            readLine.question('Qual o ano do seu Nascimento?', ano=>{
                        
                        if(ano > 2004) {
                         console.log('Você não tem 18 anos, Acesso permitido somente com acompanhante!');}
                            
                         if(ano < 2004) {
                            console.log('Acesso permitido, aproveite a noite!')
                         }
                            
                        
                         
                        
                        })        
                             

                    })        
 


            
            
            
                    
            
            

        

                   

       