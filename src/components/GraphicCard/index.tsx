import { Box, Flex, Grid, GridItem, Select, Text } from "@chakra-ui/react";
import ApexCharts from "react-apexcharts";

export function GraphicCard() {
  const options = {
    chart: {
      width: 380,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: true,
      },
      foreColor: "#f6f8fc",
    },
    labels: ["Completed", "In Progress", "To Do", "Blocked", "Canceled"],
    colors: ["#040841", "#191880", "#4371ad", "#62639b", "#b4b6f5"],
    responsive: [
      {
        breakpoint: 380,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        expandOnClick: true,
        offsetX: 0,
        offsetY: 0,
        customScale: 1,
        dataLabels: {
          offset: 0,
          minAngleToShowLabel: 10,
        },
        donut: {
          size: "40%",
          background: "transparent",
          labels: {
            show: false,
            name: {
              show: true,
              fontSize: "22px",
              fontFamily: "Roboto, sans-serif",
              fontWeight: 600,
              color: undefined,
              offsetY: -10,
              formatter(val: any) {
                return val;
              },
            },
            value: {
              show: true,
              fontSize: "16px",
              fontFamily: "Roboto, sans-serif",
              fontWeight: 400,
              color: undefined,
              offsetY: 16,
              formatter(val: any) {
                return val;
              },
            },
            total: {
              show: false,
              showAlways: false,
              label: "Total",
              fontSize: "22px",
              fontFamily: "Roboto, sans-serif",
              fontWeight: 600,
              color: undefined,
              formatter(w: { globals: { seriesTotals: any[] } }) {
                return w.globals.seriesTotals.reduce((a, b) => {
                  return a + b;
                }, 0);
              },
            },
          },
        },
      },
    },
  };

  return (
    <Flex direction="column">
      <Box
        as={Grid}
        w="100%"
        maxWidth="590px"
        h="100%"
        maxHeight="320px"
        borderRadius="8px"
        p="8"
        bg="gray.800"
        boxShadow="0 0 60px rgba(0, 0, 0, 0.5)"
        display="flex"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
      >
        <Box>
          <Flex
            as={GridItem}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text fontSize="2xl" fontWeight="bold" color="gray.100" mb="4">
              Total Task
            </Text>
            <Select
              w="40%"
              placeholder="Select Period"
              fontSize={["md", "2xs"]}
              color="gray.100"
              bg="gray.700"
              borderColor="gray.700"
              _hover={{
                borderColor: "gray.500",
              }}
            >
              <option value="option1">Year</option>
              <option value="option2">Month</option>
              <option value="option3">Day</option>
            </Select>
          </Flex>
          <Flex as={GridItem}>
            <ApexCharts
              options={options}
              series={[44, 55, 41, 17, 15]}
              type="donut"
            />
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}
