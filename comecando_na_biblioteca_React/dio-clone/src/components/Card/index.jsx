import React from 'react';

import { 
  CardContainer,
  ImageBackground,
  Content,
  UserInfo,
  UserPicture,
  PostInfo,
  HasInfo,
} from './styles';

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src='https://media.licdn.com/dms/image/D4D16AQGFJBEyDur1mQ/profile-displaybackgroundimage-shrink_350_1400/0/1705795448767?e=1715212800&v=beta&t=NA_c2RI6wV-XO2vlGqJo9Khd9OahD4Ea5KrAx7hlMdk'/>
      <Content>
        <UserInfo>
          <UserPicture src='https://avatars.githubusercontent.com/u/60948064?s=96&v=4'/>
          <div>
            <h4>William Henrique</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS</h4>
          <p>Projeto feito no curso de html e css no bootcamp dio do Globalavanade... <strong>Saiba Mais</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #JavaScript</h4>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}

export { Card }