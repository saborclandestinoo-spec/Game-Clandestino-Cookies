
// ============================================================
// CONFIGURAÇÃO — preencha as 2 primeiras linhas e salve.
// Supabase > Project Settings > API
// ============================================================
window.CONFIG = {
  SUPABASE_URL: "https://kambbbxadbluduinjpao.supabase.co",            // ex.: https://abcdefgh.supabase.co
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthbWJiYnhhZGJsdWR1aW5qcGFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA3OTM4NTAsImV4cCI6MjEwNjM2OTg1MH0.c4NwztzLuYlz93Iy2uP0jma3Y0t35kMvNTwdbEMVt5A",       // a chave "anon public"

  SENHA_PAINEL: "1012",        // senha do painel da loja
  LIMITE_POR_APARELHO_DIA: 4,  // quantas partidas o mesmo celular pode jogar por dia
  DATA_APURACAO: "2026-10-12", // dia em que a guerra termina
  INSTAGRAM: "@clandestinocookies",
  
 // ---------- Folha de adesivos ----------
  // Medidas em milimetros. Com estes valores cabem 50 adesivos por folha,
  // cada um com 55,6 x 40,8 mm.
  ADESIVO_FOLHA_LARGURA: 300,  // 30 cm
  ADESIVO_FOLHA_ALTURA:  445,  // 44,5 cm
  ADESIVO_COLUNAS: 5,
  ADESIVO_LINHAS:  10,
  ADESIVO_MARGEM:  5,          // borda da folha
  ADESIVO_ESPACO:  3,          // espaco entre adesivos
  
  // ---------- Pontos ----------
  BONUS_POR_COOKIE: 150,        // pontos que cada cookie VENDIDO garante ao time
  PONTOS_POR_MORDIDA: 0.25,     // converte os pontos do jogo em pontos do time
  MULT_MAX: 5,                  // multiplicador maximo (cookie 5 em diante)
  BONUS_POR_COOKIE_COMIDO: 10,  // pontos extras por cookie zerado dentro do jogo
  TETO_PONTOS: 300,             // teto da partida, para um craque não desequilibrar
 
  // ---------- Dificuldade ----------
  // Cada toque arranca uma mordida. A massa se regenera sozinha e o urso
  // vai ficando mais faminto conforme a partida avança.
  // Com estes valores uma partida dura entre 35 e 65 segundos.
  MORDIDAS_BASE: 24,     // mordidas para zerar o 1º cookie
  MORDIDAS_PASSO: 4,     // mordidas a mais em cada cookie seguinte
  REGEN_BASE: 0.05,      // velocidade com que a massa volta no 1º cookie (fração por segundo)
  REGEN_FATOR: 1.16,     // quanto a regeneração acelera a cada cookie novo
  ACELERA_FOME: 30,      // a cada 30s a regeneração dobra (impede partida infinita)
  MASSA_INICIAL: 0.88    // folga com que cada cookie novo começa
};
