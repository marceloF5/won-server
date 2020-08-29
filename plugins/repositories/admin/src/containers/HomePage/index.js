import React, { useState, useEffect, memo } from 'react';
import { Header } from '@buffetjs/custom';
import { Table } from '@buffetjs/core';
import styled from 'styled-components';
import axios from "axios";

const Wrapper = styled.div`
  
  p {
    margin-top: 1rem;
  }
`

const HomePage = () => {
  const [rows, setRows] = useState([])

  useEffect(() => {
    axios
      .get("https://api.github.com/users/marcelof5/repos")
      .then((res) => setRows(res.data))
      .catch((e) => strapi.notification.error(`Ops...github API error, ${e}`));
  }, []);

  const headers = [
    {
      name: 'Name',
      value: 'name',
    },
    {
      name: 'Description',
      value: 'description',
    },
    {
      name: 'URL',
      value: 'html_url',
    },
  ];

  return (
    <Wrapper>
      <Header 
        title={{label: 'Repositories'}} 
        content={'A list of our repositories in Advanced React course.'}
      />
      <Table headers={headers} rows={rows} />
    </Wrapper>
  );
};

export default memo(HomePage);
