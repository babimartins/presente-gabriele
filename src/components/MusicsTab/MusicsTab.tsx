import React from 'react';
import { MusicsContentInterface } from '../../data';
import { Link } from '@material-ui/core';

export default (props: MusicsTabProps) => {
  const { musics } = props;

  return (
    <div style={{ textAlign: 'justify', padding: '5px 20px 25px 20px', maxHeight: '50vh', overflow: 'auto' }}>
      <p>
        <Link href={musics[0].url} target="_blank" rel="noopener">
          {musics[0].title}
        </Link>
        ,
      </p>
      <p>
        É uma{' '}
        <Link href={musics[1].url} target="_blank" rel="noopener">
          {musics[1].title}
        </Link>{' '}
        não podermos nos reunirmos fisicamente e, sendo assim,{' '}
        <Link href={musics[2].url} target="_blank" rel="noopener">
          {musics[2].title}
        </Link>
        , fizemos essa singela homenagem.{' '}
        <Link href={musics[3].url} target="_blank" rel="noopener">
          {musics[3].title}
        </Link>{' '}
        que a{' '}
        <Link href={musics[4].url} target="_blank" rel="noopener">
          {musics[4].title}
        </Link>{' '}
        de ser o dia 24 chegou, e, com ele, seu tão esperado aniversário e as{' '}
        <Link href={musics[5].url} target="_blank" rel="noopener">
          {musics[5].title}
        </Link>{' '}
        daqueles que te amam.
      </p>
      <p>
        Se pudéssemos te descrever, seria como a princesa do{' '}
        <Link href={musics[6].url} target="_blank" rel="noopener">
          {musics[6].title}
        </Link>
        ,{' '}
        <Link href={musics[7].url} target="_blank" rel="noopener">
          {musics[7].title}
        </Link>{' '}
        com cabelo de cor{' '}
        <Link href={musics[8].url} target="_blank" rel="noopener">
          {musics[8].title}
        </Link>{' '}
        que,{' '}
        <Link href={musics[9].url} target="_blank" rel="noopener">
          {musics[9].title}
        </Link>
        ,{' '}
        <Link href={musics[10].url} target="_blank" rel="noopener">
          {musics[10].title}
        </Link>
        . Além disso,{' '}
        <Link href={musics[11].url} target="_blank" rel="noopener">
          {musics[11].title}
        </Link>
        , de voz tão doce, se sobe num{' '}
        <Link href={musics[12].url} target="_blank" rel="noopener">
          {musics[12].title}
        </Link>
        , ofusca até a{' '}
        <Link href={musics[13].url} target="_blank" rel="noopener">
          {musics[13].title}
        </Link>
        . Diríamos, também, que, se a Gabi fosse do século XV,{' '}
        <Link href={musics[14].url} target="_blank" rel="noopener">
          {musics[14].title}
        </Link>{' '}
        que Leonardo da Vinci tivesse feito{' '}
        <Link href={musics[15].url} target="_blank" rel="noopener">
          {musics[15].title}
        </Link>{' '}
        e pintado o rosto dela ao invés de{' '}
        <Link href={musics[16].url} target="_blank" rel="noopener">
          {musics[16].title}
        </Link>
        .{' '}
        <Link href={musics[17].url} target="_blank" rel="noopener">
          {musics[17].title}
        </Link>{' '}
        haveria nessa pintura...
      </p>
      <p>
        <Link href={musics[18].url} target="_blank" rel="noopener">
          {musics[18].title}
        </Link>{' '}
        como uma{' '}
        <Link href={musics[19].url} target="_blank" rel="noopener">
          {musics[19].title}
        </Link>
        ,{' '}
        <Link href={musics[20].url} target="_blank" rel="noopener">
          {musics[20].title}
        </Link>{' '}
        pra se encantar{' '}
        <Link href={musics[21].url} target="_blank" rel="noopener">
          {musics[21].title}
        </Link>
        , é o{' '}
        <Link href={musics[22].url} target="_blank" rel="noopener">
          {musics[22].title}
        </Link>
        , uma{' '}
        <Link href={musics[23].url} target="_blank" rel="noopener">
          {musics[23].title}
        </Link>{' '}
        <Link href={musics[24].url} target="_blank" rel="noopener">
          {musics[24].title}
        </Link>
        ,{' '}
        <Link href={musics[25].url} target="_blank" rel="noopener">
          {musics[25].title}
        </Link>{' '}
        por uma definição pra você seria insuficiente demais diante de tudo que a Gabizinha significa. Você é como um{' '}
        <Link href={musics[26].url} target="_blank" rel="noopener">
          {musics[26].title}
        </Link>{' '}
        <Link href={musics[27].url} target="_blank" rel="noopener">
          {musics[27].title}
        </Link>{' '}
        boas que se pode encontrar em{' '}
        <Link href={musics[28].url} target="_blank" rel="noopener">
          {musics[28].title}
        </Link>
        . É{' '}
        <Link href={musics[29].url} target="_blank" rel="noopener">
          {musics[29].title}
        </Link>{' '}
        e,{' '}
        <Link href={musics[30].url} target="_blank" rel="noopener">
          {musics[30].title}
        </Link>
        , ainda consegue ser incrivelmente{' '}
        <Link href={musics[31].url} target="_blank" rel="noopener">
          {musics[31].title}
        </Link>
        ...
      </p>
      <p>
        <Link href={musics[32].url} target="_blank" rel="noopener">
          {musics[32].title}
        </Link>
        , é possível enxergar uma linda{' '}
        <Link href={musics[33].url} target="_blank" rel="noopener">
          {musics[33].title}
        </Link>
        ,{' '}
        <Link href={musics[34].url} target="_blank" rel="noopener">
          {musics[34].title}
        </Link>
        , mas que sempre serve de{' '}
        <Link href={musics[35].url} target="_blank" rel="noopener">
          {musics[35].title}
        </Link>{' '}
        para as pessoas a sua volta.{' '}
        <Link href={musics[36].url} target="_blank" rel="noopener">
          {musics[36].title}
        </Link>
        , você tem o{' '}
        <Link href={musics[37].url} target="_blank" rel="noopener">
          {musics[37].title}
        </Link>{' '}
        e a{' '}
        <Link href={musics[38].url} target="_blank" rel="noopener">
          {musics[38].title}
        </Link>{' '}
        de um{' '}
        <Link href={musics[39].url} target="_blank" rel="noopener">
          {musics[39].title}
        </Link>
        , que oscila entre calmo e turbulento.
      </p>
      <p>
        <Link href={musics[40].url} target="_blank" rel="noopener">
          {musics[40].title}
        </Link>
        ,{' '}
        <Link href={musics[41].url} target="_blank" rel="noopener">
          {musics[41].title}
        </Link>
        ,{' '}
        <Link href={musics[42].url} target="_blank" rel="noopener">
          {musics[42].title}
        </Link>
        , deixa qualquer um{' '}
        <Link href={musics[43].url} target="_blank" rel="noopener">
          {musics[43].title}
        </Link>
        . Afinal, você é uma{' '}
        <Link href={musics[44].url} target="_blank" rel="noopener">
          {musics[44].title}
        </Link>{' '}
        que{' '}
        <Link href={musics[45].url} target="_blank" rel="noopener">
          {musics[45].title}
        </Link>{' '}
        de ser uma{' '}
        <Link href={musics[46].url} target="_blank" rel="noopener">
          {musics[46].title}
        </Link>
        .
      </p>
      <p>
        <Link href={musics[47].url} target="_blank" rel="noopener">
          {musics[47].title}
        </Link>
        , devia ser “
        <Link href={musics[48].url} target="_blank" rel="noopener">
          {musics[48].title}
        </Link>{' '}
        pela OMS” ficar longe de ti. Porque,{' '}
        <Link href={musics[49].url} target="_blank" rel="noopener">
          {musics[49].title}
        </Link>{' '}
        em nossas vidas,{' '}
        <Link href={musics[50].url} target="_blank" rel="noopener">
          {musics[50].title}
        </Link>
        .{' '}
        <Link href={musics[51].url} target="_blank" rel="noopener">
          {musics[51].title}
        </Link>{' '}
        d
        <Link href={musics[52].url} target="_blank" rel="noopener">
          {musics[52].title}
        </Link>{' '}
        <Link href={musics[53].url} target="_blank" rel="noopener">
          {musics[53].title}
        </Link>
        . Digo isso visto que{' '}
        <Link href={musics[54].url} target="_blank" rel="noopener">
          {musics[54].title}
        </Link>{' '}
        nos{' '}
        <Link href={musics[54].url} target="_blank" rel="noopener">
          faz sentir
        </Link>{' '}
        a{' '}
        <Link href={musics[55].url} target="_blank" rel="noopener">
          {musics[55].title}
        </Link>{' '}
        <Link href={musics[56].url} target="_blank" rel="noopener">
          {musics[56].title}
        </Link>{' '}
        de te ter como amiga, e{' '}
        <Link href={musics[57].url} target="_blank" rel="noopener">
          {musics[57].title}
        </Link>{' '}
        nessa{' '}
        <Link href={musics[58].url} target="_blank" rel="noopener">
          {musics[58].title}
        </Link>
        .
      </p>
      <p>
        Desejamos hoje e sempre muito{' '}
        <Link href={musics[59].url} target="_blank" rel="noopener">
          {musics[59].title}
        </Link>{' '}
        nessa sua vida.{' '}
        <Link href={musics[60].url} target="_blank" rel="noopener">
          {musics[60].title}
        </Link>{' '}
        muito feliz e{' '}
        <Link href={musics[61].url} target="_blank" rel="noopener">
          {musics[61].title}
        </Link>{' '}
        boas pra que reste{' '}
        <Link href={musics[62].url} target="_blank" rel="noopener">
          {musics[62].title}
        </Link>{' '}
        negatividade. Esperamos que nossa amizade seja{' '}
        <Link href={musics[63].url} target="_blank" rel="noopener">
          {musics[63].title}
        </Link>{' '}
        e que depois de todo esse caos da quarentena, que realmente{' '}
        <Link href={musics[64].url} target="_blank" rel="noopener">
          {musics[64].title}
        </Link>
        , possamos viver, juntos,{' '}
        <Link href={musics[65].url} target="_blank" rel="noopener">
          {musics[65].title}
        </Link>{' '}
        e seguir{' '}
        <Link href={musics[66].url} target="_blank" rel="noopener">
          {musics[66].title}
        </Link>{' '}
        sendo{' '}
        <Link href={musics[67].url} target="_blank" rel="noopener">
          {musics[67].title}
        </Link>
        s do corona.
      </p>
      <p>
        Por mais que as vezes você não acredite, não temos dúvidas de que a sua{' '}
        <Link href={musics[68].url} target="_blank" rel="noopener">
          {musics[68].title}
        </Link>{' '}
        é{' '}
        <Link href={musics[69].url} target="_blank" rel="noopener">
          {musics[69].title}
        </Link>{' '}
        purinha e que você{' '}
        <Link href={musics[70].url} target="_blank" rel="noopener">
          {musics[70].title}
        </Link>{' '}
        uma{' '}
        <Link href={musics[71].url} target="_blank" rel="noopener">
          {musics[71].title}
        </Link>{' '}
        que{' '}
        <Link href={musics[72].url} target="_blank" rel="noopener">
          {musics[72].title}
        </Link>{' '}
        repleta da realização dos seus{' '}
        <Link href={musics[73].url} target="_blank" rel="noopener">
          {musics[73].title}
        </Link>
        .
      </p>
      <p>
        Obrigado pelo "
        <Link href={musics[74].url} target="_blank" rel="noopener">
          {musics[74].title}
        </Link>
        " que vivemos juntos. Sei que{' '}
        <Link href={musics[75].url} target="_blank" rel="noopener">
          {musics[75].title}
        </Link>
        ... Mas fica bem e{' '}
        <Link href={musics[76].url} target="_blank" rel="noopener">
          {musics[76].title}
        </Link>
        , que tudo isso vai passar.{' '}
        <Link href={musics[77].url} target="_blank" rel="noopener">
          {musics[77].title}
        </Link>{' '}
        tentar aproveitar esse dia da melhor maneira possível? Pois, você merece uma comemoração especial por mais
        simples que seja, e lembre-se: nós te amamos e desejamos o melhor pra ti hoje e sempre. ♥️
      </p>
      <p>
        <Link href={musics[78].url} target="_blank" rel="noopener">
          {musics[78].title}
        </Link>
        , Esperamos que tudo isso aqueça seu coração,{' '}
        <Link href={musics[79].url} target="_blank" rel="noopener">
          {musics[79].title}
        </Link>{' '}
        com uma vida sempre leve e rodeada pelo afeto dos seus amigos.{' '}
        <Link href={musics[80].url} target="_blank" rel="noopener">
          {musics[80].title}
        </Link>{' '}
        isso tudo passar pra gente se ver e comemorar tudo que pudermos. Porque,{' '}
        <Link href={musics[81].url} target="_blank" rel="noopener">
          {musics[81].title}
        </Link>
        , nós ficamos{' '}
        <Link href={musics[82].url} target="_blank" rel="noopener">
          {musics[82].title}
        </Link>
        (ais), relembrando os{' '}
        <Link href={musics[83].url} target="_blank" rel="noopener">
          {musics[83].title}
        </Link>{' '}
        do CEFET (
        <Link href={musics[84].url} target="_blank" rel="noopener">
          {musics[84].title}
        </Link>
        ) e torcendo para que a gente{' '}
        <Link href={musics[85].url} target="_blank" rel="noopener">
          {musics[85].title}
        </Link>{' '}
        novamente.
      </p>
      <p>
        {' '}
        <Link href={musics[86].url} target="_blank" rel="noopener">
          {musics[86].title}
        </Link>{' '}
        (amamos), ou melhor, temos certeza disso.
      </p>{' '}
      <Link href={musics[87].url} target="_blank" rel="noopener">
        {musics[87].title}
      </Link>
      , amigaaa
    </div>
  );
};

interface MusicsTabProps {
  musics: MusicsContentInterface[];
}
