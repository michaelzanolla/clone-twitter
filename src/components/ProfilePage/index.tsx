import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Michael Carlos Zanolla</h1>
        <h2>@michaelzanolla</h2>

        <p>
          Developer at <a href="https://rocketseat.com.br">@Rocketseat</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Cuiabá, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 21 de setembro de 1986
          </li>
        </ul>

        <Followage>
          <span>
            Seguindo <strong>97</strong>
          </span>
          <span>
            <strong>80 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
