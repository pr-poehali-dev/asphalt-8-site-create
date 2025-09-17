import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('game');

  const screenshots = [
    {
      src: '/img/53096524-9802-4b00-9b4d-0eccf44e43ec.jpg',
      alt: 'Asphalt 8 Racing Screenshot',
      title: 'High-Speed Racing'
    },
    {
      src: '/img/49fc529a-b3c1-433c-b7ea-0370f01c7c6e.jpg',
      alt: 'Asphalt 8 Cars',
      title: 'Luxury Supercars'
    },
    {
      src: '/img/707eab0f-7b89-42bd-8214-37fc39cf7687.jpg',
      alt: 'Asphalt 8 Stunts',
      title: 'Epic Stunts'
    }
  ];

  const gameFeatures = [
    {
      icon: 'Car',
      title: 'Легендарные автомобили',
      description: 'Более 300 лицензированных автомобилей от ведущих производителей'
    },
    {
      icon: 'Trophy',
      title: 'Мировые чемпионаты',
      description: 'Соревнуйтесь с игроками со всего мира в захватывающих турнирах'
    },
    {
      icon: 'Zap',
      title: 'Сумасшедшая скорость',
      description: 'Почувствуйте адреналин на скорости свыше 300 км/ч'
    },
    {
      icon: 'MapPin',
      title: 'Эпичные трассы',
      description: 'Гоняйте по живописным локациям от Токио до Лас-Вегаса'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-racing-carbon via-gray-900 to-black text-white font-['Open_Sans']">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-racing-orange/20 to-racing-blue/20 animate-pulse"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-['Oswald'] font-bold mb-6 bg-gradient-to-r from-racing-orange to-racing-blue bg-clip-text text-transparent">
              ASPHALT 8
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Почувствуйте адреналин в самой захватывающей аркадной гоночной игре. 
              Бешеная скорость, эпичные трюки и легендарные автомобили ждут вас!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button className="bg-racing-orange hover:bg-racing-orange/80 text-white px-8 py-3 text-lg font-semibold transition-transform hover:scale-105">
                <Icon name="Download" className="mr-2" />
                Скачать игру
              </Button>
              <Button variant="outline" className="border-racing-blue text-racing-blue hover:bg-racing-blue hover:text-white px-8 py-3 text-lg transition-transform hover:scale-105">
                <Icon name="Play" className="mr-2" />
                Смотреть трейлер
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="container mx-auto px-4 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-racing-carbon/50 border border-racing-orange/30">
            <TabsTrigger 
              value="game" 
              className="text-lg font-['Oswald'] data-[state=active]:bg-racing-orange data-[state=active]:text-white transition-all duration-300"
            >
              <Icon name="Gamepad2" className="mr-2" />
              Игра
            </TabsTrigger>
            <TabsTrigger 
              value="gallery" 
              className="text-lg font-['Oswald'] data-[state=active]:bg-racing-orange data-[state=active]:text-white transition-all duration-300"
            >
              <Icon name="Image" className="mr-2" />
              Галерея
            </TabsTrigger>
            <TabsTrigger 
              value="videos" 
              className="text-lg font-['Oswald'] data-[state=active]:bg-racing-orange data-[state=active]:text-white transition-all duration-300"
            >
              <Icon name="Video" className="mr-2" />
              Видео
            </TabsTrigger>
          </TabsList>

          {/* Game Features Tab */}
          <TabsContent value="game" className="animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {gameFeatures.map((feature, index) => (
                <Card key={index} className="bg-racing-carbon/30 border-racing-orange/20 hover:border-racing-orange/60 transition-all duration-300 hover:scale-105 group">
                  <CardContent className="p-6 text-center">
                    <div className="bg-gradient-to-br from-racing-orange to-racing-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon name={feature.icon} size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-['Oswald'] font-semibold mb-2 text-racing-orange">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <h2 className="text-4xl font-['Oswald'] font-bold mb-6 text-racing-blue">
                Готовы к гонкам?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Присоединяйтесь к миллионам игроков и станьте легендой асфальта!
              </p>
              <Button className="bg-racing-blue hover:bg-racing-blue/80 text-white px-12 py-4 text-xl font-semibold transition-transform hover:scale-105">
                Начать гонку
              </Button>
            </div>
          </TabsContent>

          {/* Gallery Tab */}
          <TabsContent value="gallery" className="animate-fade-in">
            <h2 className="text-4xl font-['Oswald'] font-bold text-center mb-12 text-racing-orange">
              Скриншоты игры
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {screenshots.map((screenshot, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <img 
                    src={screenshot.src} 
                    alt={screenshot.alt}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-['Oswald'] font-semibold text-white mb-2">
                        {screenshot.title}
                      </h3>
                      <Button size="sm" className="bg-racing-orange hover:bg-racing-orange/80">
                        <Icon name="Expand" className="mr-2" size={16} />
                        Увеличить
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="outline" className="border-racing-blue text-racing-blue hover:bg-racing-blue hover:text-white px-8 py-3">
                <Icon name="ImagePlus" className="mr-2" />
                Показать все скриншоты
              </Button>
            </div>
          </TabsContent>

          {/* Videos Tab */}
          <TabsContent value="videos" className="animate-fade-in">
            <h2 className="text-4xl font-['Oswald'] font-bold text-center mb-12 text-racing-blue">
              Видео и трейлеры
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-racing-carbon/30 border-racing-orange/20 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-video bg-gradient-to-br from-racing-orange/20 to-racing-blue/20 flex items-center justify-center group cursor-pointer">
                    <div className="bg-racing-orange/80 w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name="Play" size={32} className="text-white ml-1" />
                    </div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-['Oswald'] font-semibold mb-2 text-racing-orange">
                      Официальный трейлер
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Посмотрите захватывающий трейлер с лучшими моментами игры
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-racing-carbon/30 border-racing-blue/20 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-video bg-gradient-to-br from-racing-blue/20 to-racing-orange/20 flex items-center justify-center group cursor-pointer">
                    <div className="bg-racing-blue/80 w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name="Play" size={32} className="text-white ml-1" />
                    </div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-['Oswald'] font-semibold mb-2 text-racing-blue">
                      Геймплей
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Эпичные трюки и безумные гонки на лучших трассах мира
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-['Oswald'] font-semibold mb-4 text-racing-gold">
                Хотите увидеть больше?
              </h3>
              <p className="text-gray-300 mb-6">
                Подпишитесь на наш канал и не пропускайте новые видео!
              </p>
              <Button className="bg-gradient-to-r from-racing-orange to-racing-blue hover:from-racing-orange/80 hover:to-racing-blue/80 text-white px-8 py-3">
                <Icon name="Youtube" className="mr-2" />
                Смотреть на YouTube
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-racing-carbon border-t border-racing-orange/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Asphalt 8. Все права защищены. Почувствуйте скорость!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;