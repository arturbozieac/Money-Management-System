import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Text } from "../../components/theme";
import { Chart } from "../Svgs";
import { Platform, StyleSheet } from 'react-native';
const Top = () => {
  const dispatch = useDispatch();
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  var month = new Date().getMonth();

  const { transactions } = useSelector((state) => state.trs);
  const prices = transactions.map((transaction) => transaction.price);
  const balance = prices.reduce((prev, cur) => (prev += cur), 0);
  const expense =
    prices
      .filter((price) => price < 0)
      .reduce((prev, cur) => (prev += cur), 0) * -1;

  const income = expense + balance;

  return (
    <Box paddingLeft="l" paddingRight="l" style={{ paddingTop: Platform.OS === 'ios' ? "15%" : "4%" }}>
      <Box flexDirection="row" justifyContent="space-between">
        <Text variant="title" style={{ fontSize: 30 }}>
          {monthNames[month]}
        </Text>
      </Box>
      <Box flexDirection="row" justifyContent="space-between" marginTop="m">
        <Box>
          <Text
            textAlign="center"
            fontFamily="RRegular"
            variant="body"
            color="white"
          >
            Income
          </Text>
          <Text
            textAlign="center"
            fontFamily="SFBOLD"
            fontSize={13}
            color="green"
            fontWeight="700"
          >
            ${income}
          </Text>
        </Box>
        <Box>
          <Text
            textAlign="center"
            fontFamily="RRegular"
            variant="body"
            color="white"
          >
            Expenses
          </Text>
          <Text
            textAlign="center"
            fontSize={13}
            color="red"
            fontWeight="700"
            fontFamily="SFBOLD"
          >
            -${expense}
          </Text>
        </Box>
        <Box>
          <Text
            fontFamily="RRegular"
            textAlign="center"
            variant="body"
            color="white"
          >
            Balance
          </Text>
          <Text
            textAlign="center"
            fontWeight="700"
            fontFamily="SFBOLD"
            fontSize={13}
            color="brown"
          >
            ${balance}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Top;
