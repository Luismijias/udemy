echo "        **************************************** "
echo "        **************************************** "
echo "        ***** Olá Nino bem vindo ao Netuno ***** "
echo "        **         Escolha um Projeto:        ** "
echo "        **                                    ** "
echo "        **           [0] cluar                ** "
echo "        **           [1] helipacity           ** "
echo "        **           [2] netbase              ** "
echo "        **           [3] cluarnino            ** "               
echo "        **           [4]                      ** "
echo "        **         ► [5] fullstack            ** "
echo "        **           [6]                      ** "
echo "        **           [7]                      ** "
echo "        **           [8]                      ** "
echo "        **           [9]                      ** "
echo "        **           [10] udemy               ** "
echo "        **           [11]                     ** "
echo "        **           [12]                     ** "
echo "        **           [13]                     ** "
echo "        **           [14]                     ** "
echo "        **                                    ** "
echo "        **           CTRL + C ==>SAIR         ** "
echo "        **                                    ** "
echo "        **************************************** " 
echo "        **              N E T U N O           ** "
echo "        **************************************** "
echo "        **************************************** "

$Number = Read-Host -Prompt 'Número do projeto'
$projetct = $Number
if ( $projetct -eq 0 ) {' 
Atenção no Cluar sou colaborador !!!!!
Atenção no Cluar sou colaborador !!!!!
Atenção no Cluar sou colaborador !!!!!
Atenção no Cluar sou colaborador !!!!!
Atenção no Cluar sou colaborador !!!!!
Atenção no Cluar sou colaborador !!!!!
Atenção no Cluar sou colaborador !!!!!
Atenção no Cluar sou colaborador !!!!!
Atenção no Cluar sou colaborador !!!!!
'}
elseif ( $projetct -eq 1 ) { $result = 'helipacity' }
elseif ( $projetct -eq 2 ) { $result = 'netbase' }
elseif ( $projetct -eq 3 ) { $result = 'cluarnino' }
elseif ( $projetct -eq 4 ) { $result = '' }
elseif ( $projetct -eq 5 ) { $result = 'fullstack' }
elseif ( $projetct -eq 6 ) { $result = '' }
elseif ( $projetct -eq 7 ) { $result = '' }
elseif ( $projetct -eq 8 ) { $result = '' }
elseif ( $projetct -eq 9 ) { $result = '' }
elseif ( $projetct -eq 10) { 
    cd udemy
    start https://www.udemy.com/course/curso-web/learn/
    code .
    cd
    break
 }
elseif ( $projetct -eq 11) { $result = '' }
elseif ( $projetct -eq 12) { $result = '' }
elseif ( $projetct -eq 13) { $result = '' }
elseif ( $projetct -eq 14) { $result = '' }


# elseif ( $projetct -eq 14) { $result = ''    }
# elseif ( $projetct -eq 15) { $result = ''  }
cd
cd netuno 
cd apps
cd $result
code .
cd ..
cd ..
./netuno server app=$result
cd 
exit

