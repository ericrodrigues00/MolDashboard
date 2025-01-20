'use client';

import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// Definindo interfaces para os tipos de dados
interface ComparativeData {
  edicao: string;
  inscricoes: number;
}

interface GenderData {
  genero: string;
  porcentagem: number;
}

interface AgeData {
  faixa: string;
  porcentagem: number;
}

interface EducationData {
  nivel: string;
  porcentagem: number;
}

interface StateData {
  state: string;
  ed1: number;
  ed2: number;
  ed3: number;
  total: number;
}

interface PieData {
  name: string;
  value: number;
}

type EditionKey = 'edicao1' | 'edicao2' | 'edicao3';

interface DataCollections {
  genderData: Record<EditionKey, GenderData[]>;
  ageData: Record<EditionKey, AgeData[]>;
  educationData: Record<EditionKey, EducationData[]>;
  pieData: Record<EditionKey, PieData[]>;
}

const Dashboard: React.FC = () => {
  const [activeTab] = useState('demografico');

  // Cores para os gráficos de pizza
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

  // Dados de inscrições
  const comparativeData: ComparativeData[] = [
    { edicao: '1ª Edição', inscricoes: 123 },
    { edicao: '2ª Edição', inscricoes: 143 },
    { edicao: '3ª Edição', inscricoes: 146 }
  ];

  // Dados de gênero
  const genderData: Record<EditionKey, GenderData[]> = {
    edicao1: [
      { genero: 'Feminino', porcentagem: Math.round((80/123)*100) },
      { genero: 'Masculino', porcentagem: Math.round((39/123)*100) },
      { genero: 'Não-Binário/Não Informado', porcentagem: Math.round((4/123)*100) }
    ],
    edicao2: [
      { genero: 'Feminino', porcentagem: Math.round((90/132)*100) },
      { genero: 'Masculino', porcentagem: Math.round((39/132)*100) },
      { genero: 'Não-Binário/Não Informado', porcentagem: Math.round((3/132)*100) }
    ],
    edicao3: [
      { genero: 'Feminino', porcentagem: Math.round((90/128)*100) },
      { genero: 'Masculino', porcentagem: Math.round((36/128)*100) },
      { genero: 'Não-Binário/Não Informado', porcentagem: Math.round((2/128)*100) }
    ]
  };

  // Dados de idade
  const ageData: Record<EditionKey, AgeData[]> = {
    edicao1: [
      { faixa: '18-25', porcentagem: 35 },
      { faixa: '26-35', porcentagem: 42 },
      { faixa: '36-45', porcentagem: 18 },
      { faixa: '46+', porcentagem: 5 }
    ],
    edicao2: [
      { faixa: '18-25', porcentagem: 35 },
      { faixa: '26-35', porcentagem: 37 },
      { faixa: '36-45', porcentagem: 20 },
      { faixa: '46+', porcentagem: 8 }
    ],
    edicao3: [
      { faixa: '18-25', porcentagem: 38 },
      { faixa: '26-35', porcentagem: 40 },
      { faixa: '36-45', porcentagem: 17 },
      { faixa: '46+', porcentagem: 5 }
    ]
  };

  // Dados de formação
  const educationData: Record<EditionKey, EducationData[]> = {
    edicao1: [
      { nivel: 'Graduação Completa', porcentagem: 55 },
      { nivel: 'Pós-Graduação', porcentagem: 25 },
      { nivel: 'Graduação Incompleta', porcentagem: 20 }
    ],
    edicao2: [
      { nivel: 'Graduação Completa', porcentagem: 58 },
      { nivel: 'Pós-Graduação', porcentagem: 22 },
      { nivel: 'Graduação Incompleta', porcentagem: 20 }
    ],
    edicao3: [
      { nivel: 'Graduação Completa', porcentagem: 60 },
      { nivel: 'Pós-Graduação', porcentagem: 25 },
      { nivel: 'Graduação Incompleta', porcentagem: 15 }
    ]
  };

  // Dados geográficos
  const allStatesData: StateData[] = [
    { state: 'SP', ed1: 18, ed2: 18, ed3: 14, total: 17 },
    { state: 'MG', ed1: 6, ed2: 5, ed3: 13, total: 8 },
    { state: 'RS', ed1: 10, ed2: 5, ed3: 11, total: 9 },
    { state: 'CE', ed1: 8, ed2: 5, ed3: 10, total: 8 },
    { state: 'BA', ed1: 9, ed2: 5, ed3: 5, total: 6 },
    { state: 'PE', ed1: 7, ed2: 6, ed3: 5, total: 6 },
    { state: 'PR', ed1: 8, ed2: 8, ed3: 2, total: 6 },
    { state: 'DF', ed1: 4, ed2: 10, ed3: 2, total: 5 },
    { state: 'RJ', ed1: 1, ed2: 3, ed3: 4, total: 3 },
    { state: 'ES', ed1: 5, ed2: 3, ed3: 2, total: 3 },
    { state: 'SC', ed1: 2, ed2: 3, ed3: 3, total: 3 },
    { state: 'TO', ed1: 0, ed2: 2, ed3: 4, total: 2 },
    { state: 'RO', ed1: 5, ed2: 1, ed3: 3, total: 3 },
    { state: 'GO', ed1: 1, ed2: 2, ed3: 3, total: 2 },
    { state: 'AL', ed1: 1, ed2: 5, ed3: 2, total: 3 },
    { state: 'PB', ed1: 2, ed2: 2, ed3: 2, total: 2 },
    { state: 'AM', ed1: 3, ed2: 2, ed3: 2, total: 2 },
    { state: 'PA', ed1: 2, ed2: 2, ed3: 2, total: 2 },
    { state: 'RN', ed1: 4, ed2: 2, ed3: 0, total: 2 },
    { state: 'PI', ed1: 0, ed2: 0, ed3: 2, total: 1 },
    { state: 'SE', ed1: 0, ed2: 1, ed3: 2, total: 1 },
    { state: 'MS', ed1: 1, ed2: 2, ed3: 0, total: 1 },
    { state: 'MA', ed1: 1, ed2: 0, ed3: 0, total: 0.3 },
    { state: 'AC', ed1: 0, ed2: 0, ed3: 1, total: 0.3 },
    { state: 'MT', ed1: 0, ed2: 0, ed3: 0, total: 0 },
    { state: 'RR', ed1: 0, ed2: 0, ed3: 0, total: 0 },
    { state: 'AP', ed1: 0, ed2: 0, ed3: 0, total: 0 }
  ].sort((a, b) => b.total - a.total);

  // Função para gerar dados do gráfico de pizza
  const getEditionPieData = (edition: number): PieData[] => {
    const edKey = `ed${edition}` as 'ed1' | 'ed2' | 'ed3';
    return allStatesData
      .map(state => ({ 
        name: state.state, 
        value: state[edKey]
      }))
      .filter(item => item.value > 0)
      .sort((a, b) => b.value - a.value)
      .slice(0, 6);
  };

  const pieData: Record<EditionKey, PieData[]> = {
    edicao1: getEditionPieData(1),
    edicao2: getEditionPieData(2),
    edicao3: getEditionPieData(3)
  };

  // Função para formatar porcentagem no tooltip
  const formatTooltipValue = (value: number): string => `${value}%`;

  return (
    <div className="p-4 space-y-4 bg-gray-50">
      <h1 className="text-2xl font-bold text-center mb-6">Dashboard Prêmio MOL de Jornalismo</h1>
      
      <Tabs defaultValue="demografico" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="demografico">Demografia</TabsTrigger>
          <TabsTrigger value="geografico">Geografia</TabsTrigger>
          <TabsTrigger value="educacional">Formação</TabsTrigger>
        </TabsList>

        <TabsContent value="demografico">
          <div className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Evolução das Inscrições</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={comparativeData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="edicao" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="inscricoes" name="Inscrições" stroke="#8884d8" activeDot={{ r: 8 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Evolução por Gênero</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={[
                        { edicao: '1ª Edição', feminino: 65, masculino: 32, outros: 3 },
                        { edicao: '2ª Edição', feminino: 68, masculino: 30, outros: 2 },
                        { edicao: '3ª Edição', feminino: 70, masculino: 28, outros: 2 }
                      ]}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="edicao" />
                        <YAxis />
                        <Tooltip formatter={formatTooltipValue} />
                        <Legend />
                        <Line type="monotone" dataKey="feminino" name="Feminino" stroke="#8884d8" />
                        <Line type="monotone" dataKey="masculino" name="Masculino" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="outros" name="Não-Binário/NI" stroke="#ffc658" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            {(['edicao1', 'edicao2', 'edicao3'] as EditionKey[]).map((edicao, index) => (
              <Card key={edicao}>
                <CardHeader>
                  <CardTitle>{`${index + 1}ª Edição - Perfil Demográfico`}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="h-64">
                      <h3 className="text-sm font-semibold mb-2">Distribuição por Idade</h3>
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={ageData[edicao]}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="faixa" />
                          <YAxis />
                          <Tooltip formatter={formatTooltipValue} />
                          <Bar dataKey="porcentagem" fill="#8884d8" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="h-64">
                      <h3 className="text-sm font-semibold mb-2">Distribuição por Gênero</h3>
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={genderData[edicao]}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="genero" />
                          <YAxis />
                          <Tooltip formatter={formatTooltipValue} />
                          <Bar dataKey="porcentagem" fill="#82ca9d" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="educacional">
          <div className="grid grid-cols-1 gap-4">
            {(['edicao1', 'edicao2', 'edicao3'] as EditionKey[]).map((edicao, index) => (
              <Card key={edicao}>
                <CardHeader>
                  <CardTitle>{`${index + 1}ª Edição - Formação Acadêmica`}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={educationData[edicao]}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="nivel" />
                        <YAxis />
                        <Tooltip formatter={formatTooltipValue} />
                        <Bar dataKey="porcentagem" fill="#ffc658" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="geografico">
          <div className="grid grid-cols-1 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Distribuição por Estados (em %)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">1ª Ed.</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">2ª Ed.</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">3ª Ed.</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {allStatesData.map((row: StateData, idx: number) => (
                        <tr key={row.state} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.state}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">{row.ed1}%</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">{row.ed2}%</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">{row.ed3}%</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900 font-medium">{row.total}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((edition) => (
                <Card key={`edition-${edition}`}>
                  <CardHeader>
                    <CardTitle>{`${edition}ª Edição - Top 6 Estados`}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={pieData[`edicao${edition}` as EditionKey]}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({name, percent}) => `${name} (${(percent * 100).toFixed(0)}%)`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {pieData[`edicao${edition}` as EditionKey].map((entry: PieData, index: number) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;