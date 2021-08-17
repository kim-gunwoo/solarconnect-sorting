import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

const INTERVAL_TIME = 1000 * 60;

export default function LocaleDateTimer({ locales = "ko-KR" }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  const getLocalDateCurrentTime = useCallback(() => {
    return currentTime.toLocaleDateString(locales, {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    });
  }, [locales, currentTime]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, INTERVAL_TIME);
    return () => clearInterval(interval);
  }, []);

  return <Container>{getLocalDateCurrentTime()}</Container>;
}

const Container = styled.div`
  padding: 20px;
  background-color: #f2f4f5;
  text-align: center;
  font-size: 20px;
`;
