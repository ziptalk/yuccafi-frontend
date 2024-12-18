import ApexCharts from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import useTablet from '../../../common/hooks/useTablet';
import { IChartData } from '../../types/pnlChartType';

const PreviewChart = ({ chartData }: { chartData: IChartData[] }) => {
  const isTablet = useTablet();
  const series = [
    {
      name: '차트 미리보기',
      data: chartData?.map((item) => [
        new Date(item.createdAt).getTime(),
        item.pnlRate,
      ]),
      // data: [
      //   [new Date('2024-08-01').getTime(), 10],
      //   [new Date('2024-08-02').getTime(), 20],
      //   [new Date('2024-08-03').getTime(), 15],
      //   [new Date('2024-08-04').getTime(), 40],
      //   [new Date('2024-08-05').getTime(), 25],
      // ],

      type: 'area',
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: 'line',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      colors: ['#6D9F71'],
      width: 2,
    },
    fill: {
      type: 'gradient',
      gradient: {
        type: 'vertical',
        shadeIntensity: 0.5,
        gradientToColors: ['#6D9F71'],
        inverseColors: true,
        opacityFrom: 0.3,
        opacityTo: 0.2,
        stops: [0, 100],
      },
    },
    xaxis: {
      type: 'datetime',
      labels: {
        show: false, // x축 레이블 숨기기
      },
      axisBorder: {
        show: false, // x축 경계선 숨기기
      },
      axisTicks: {
        show: false, // x축 눈금 숨기기
      },
    },
    yaxis: {
      labels: {
        show: false, // y축 레이블 숨기기
      },
      axisBorder: {
        show: false, // y축 경계선 숨기기
      },
      axisTicks: {
        show: false, // y축 눈금 숨기기
      },
    },
    grid: {
      show: false, // 그리드 숨기기
    },
    tooltip: {
      enabled: false,
    },
  };

  return isTablet ? (
    <ApexCharts
      options={options}
      series={series}
      type='area'
      height={70}
      width={210}
    />
  ) : (
    <ApexCharts
      options={options}
      series={series}
      type='area'
      height={110}
      width={300}
    />
  );
};

export default PreviewChart;
