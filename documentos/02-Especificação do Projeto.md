# Especificação do Projeto

## Perfis de Usuários

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 01 </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Produtor de eventos</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Meio de divulgação para seus eventos produzidos que atraia público interessado em seu nicho. </td>
</tr>
</tbody>
</table>
<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 02 </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Consumidor de eventos</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Local que permita visualização única de todos os eventos do nicho de seu interesse.  </td>
</tr>
</tbody>
</table>


## Histórias de Usuários

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Produtor de eventos;                | Fazer login na plataforma tendo acesso à página de cadastro de eventos;                       | Poder realizar registro dos meus eventos; produzidos.                            |
|  Produtor de eventos;                | Criar registros de eventos;                       | Ter o evento publicado pela plataforma;                              |
| Produtor de eventos;                | Editar registros de eventos;                       | Corrigir, retirar ou incrementar informações ao evento;                            |
|  Consumidor de eventos undergrounds;                | Fazer login na plataforma;                       | Estar atualizado sobre as publicações de eventos;                              |
|  Consumidor de eventos undergrounds;                | Localizar os eventos, filtrando por localização e gênero;                      | Ter acesso direto aos eventos; favoráveis para mim.                              |
|  Consumidor de eventos undergrounds;                | Favoritar os eventos do meu interesse;                      | Acessá-los com mais facilidade;                              |
|  Consumidor de eventos undergrounds;                | Receber notificação via e-mail sempre que um evento for divulgado;            | Estar sempre atualizado dos próximos eventos;                            |
|  Consumidor de eventos undergrounds;                | Fazer comentários nas publicações;                     | Interagir com o público interessado no mesmo evento que eu.                            |

## Requisitos do Projeto
### Requisitos Funcionais

|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 |A plataforma deve ter uma página inicial intuitiva com menu navegável;| Alta |
| RF-02 |A plataforma deve permitir login de usuário baseando-se nos dois perfis de usuário especificados;| Alta | 
| RF-03 |A plataforma deve permitir cadastro de novos eventos para o perfil do produtor;| Alta | 
| RF-04 |A plataforma deve permitir edição do evento para o usuário que o publicou;| Alta | 
| RF-05 |A plataforma deve disponibilizar filtros de localização e gênero na busca por eventos;| Alta | 
| RF-06 |A plataforma deve apresentar eventos publicados na página inicial;| Média | 
| RF-07 |A plataforma deve exibir um botão “favoritar” funcional nas publicações de evento;| Média | 
| RF-09 |A plataforma deve conter uma barra de comentários nas publicações de evento.| Baixa |


### Requisitos não Funcionais

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 |Site publicado em um ambiente acessível publicamente na Internet;| Alta  | 
| RNF-02 |Site compatível com os navegadores mais usados na atualidade;| Alta  |
| RNF-03 |Site responsivo para Android e IOS;| Alta  |
| RNF-04 |Sistema operacional Windows, MAC, Linux.| Alta  |
