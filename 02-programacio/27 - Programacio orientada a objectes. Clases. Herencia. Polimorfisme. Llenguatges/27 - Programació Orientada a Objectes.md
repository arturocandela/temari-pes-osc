# 27 - Programació Orientada a Objectes. Objectes. Classes. Herència, Polimorfisme. Llenguatges

## 1. INTRODUCCIÓ

El paradigma de la programació modular divideix el problema en un **conjunt de funcions que operen sobre un grup de dades** per arribar a la solució del problema. Este paradigma permet resoldre una gran quantitat de problemes. No obstant això, quan la complexitat d'estos augmenta, també ho fan les interrelacions, per la qual cosa l'acoplament entre les funcions creix de manera exponencial. Açò acaba generant un codi molt difícil de mantindre, perquè no hi ha una manera senzilla de determinar si un canvi en una funció concreta afectarà una altra.

Davant esta problemàtica, sorgeix el paradigma de la programació orientada a objectes (`OOP`, de l'anglés *Object Oriented Programming*) com a alternativa i complement al de la programació modular. En ell es combinen funcions i dades relacionades en una unitat denominada *objecte*.

En este tema s'estudiarà què és la `OOP` i de quins elements està composta. Així mateix, s'exposaran els pilars més importants de la programació orientada a objectes, entre els quals trobem: encapsulació, abstracció, herència i polimorfisme. Finalment, es revisaran quins són els llenguatges de programació orientats a objectes més utilitzats.

Tots els exemples presentats en el tema es realitzaran amb el llenguatge de programació Java, ja que és un dels més utilitzats i representatius d'este paradigma.

## 2. CLASSES I OBJECTES

La idea bàsica d'este paradigma és proporcionar models al programador que **s'assemblen al món real** més que els proporcionats per la programació modular. D'esta manera, la unitat fonamental d'este paradigma és l'objecte.

L'objecte està format per un conjunt de variables (anomenades *atributs*) i les operacions (anomenades *mètodes*) que manipulen estos atributs. Una classe és el prototip que defineix els atributs i mètodes que formaran part d'un determinat objecte. És la definició abstracta del tipus de dada a partir del qual es crearà la variable (objecte, en este cas) en memòria.

Per exemple, es defineix la classe *Cotxe*, amb una sèrie d'atributs que poden formar part d'un cotxe com ara: `km_totals`, `numero_bastidor`, `litres_gasolina`, `en_marxa` i uns mètodes o operacions que pot realitzar com ara: `start()`, `stop()`, *getFuelLevel()*, *driveOneKilometer()*, *getChassisNumber()*. Si es creen diversos objectes d'eixa classe, existiran variables diferents que podran tindre valors propis per a eixos atributs: cada cotxe tindrà el seu propi número de bastidor (`numero_bastidor`), quilòmetres totals (`km_totals`), etc. Al conjunt de tots els valors que té en un moment concret cada atribut d'un objecte se li diu **estat** de l'objecte.

### 2.1. Elements

#### 2.1.1. Atributs

Són les variables o característiques pròpies d'un objecte o classe. Per exemple, els cotxes tenen un número de bastidor que seria un atribut de l'objecte de la classe `Car`. Els atributs que tenen les classes poden ser de 2 tipus:

1. **Elemental** (enter, float, booleà,...).
2. **No elemental** (arrays, objectes d'altres classes, etc.).

#### 2.1.2. Mètodes

Són les funcions i procediments propis d'un objecte o classe. Quan s'invoquen des d'altres objectes, o des del propi objecte, s'executa el codi que contenen, amb la qual cosa s'executen accions i es modifica o no l'estat de l'objecte (és a dir, canvien els valors dels seus atributs). El procés d'invocació es realitza amb una sintaxi molt similar a la programació modular.

```java
car.driveOneKilometer();
```

La manera d'invocar els mètodes d'un objecte és mitjançant l'enviament de missatges. És a dir, quan s'escriu `car.driveOneKilometer()`, en realitat això es tradueix en: envia el missatge `driveOneKilometer` sense cap paràmetre a l'objecte `car`. Açò permet la sobrecàrrega de mètodes, com veurem més avant en el tema.

Es distingeix entre mètodes i atributs d'objecte i de classe. Un mètode o atribut d'objecte és una variable particular de cada instància de la classe (té un comportament diferent per a cada objecte). En canvi, els mètodes i atributs de classe són propis de la classe i serveixen per a valors globals, com ara el nombre total d'objectes creats.

#### 2.1.3. Constructors i Destructors

Els constructors i destructors són mètodes especials que serveixen per a crear objectes d'una classe (és a dir, reservar memòria, inicialitzar atributs i mètodes) i per a eliminar-los (és a dir, alliberar l'espai que ocupaven). Alguns llenguatges com Java no necessiten mètodes destructors perquè tenen un sistema denominat **recollidor de fem** (`garbage collector`) que s'encarrega d'alliberar la memòria dels objectes que ja no s'utilitzen. Altres llenguatges com *C++* necessiten que el programador indique explícitament com s'ha de gestionar la memòria.

```java
public class Car {
    // Attributes
    String chassisNumber;
    float totalKm;
    float fuelLiters;
    boolean running;

    Car(String number){
        chassisNumber = number;
        totalKm = 0;
        fuelLiters = 0;
        running = false;
    } 

    // Methods
    void start(){
        running = true;
    }

    String getChassisNumber(){
        return chassisNumber;
    }

    // More methods...
}
```

En el cas de Java o C#, sí que existeixen mètodes específics per al recollidor de fem, però no sabem quan es cridaran ni si es cridaran, per la qual cosa no s'ha de confiar en ells com a desencadenants d'accions.

### 2.2. Associacions

Les agregacions i composicions són tipus especials d'associacions entre classes on una de les dues classes representa un “tot” i l'altra una part d'eixe tot. La diferència entre les dues és subtil:

* **Agregació**: és un tipus d'associació on una de les classes és el tot i l'altra una part, però la part pot existir per si mateixa si el tot desapareix. Exemple: una *Llibreria* i *Llibre*.
* **Composició**: si el tot desapareix, la part també desapareix. Exemple: una *Casa* i les seues *Finestres*.

```java
class Car {
    Person driver;
    Person[] passengers;
}

class Person {
    String id;
    String name;
}
```

## 3. ELS 4 PILARS DE LA PROGRAMACIÓ ORIENTADA A OBJECTES

L'objectiu de la OOP és reduir la complexitat de les solucions i proporcionar ferramentes als programadors per a utilitzar estructures i conceptes més propers al món real. La unitat bàsica és l'objecte i el paradigma es fonamenta en els següents pilars:

### 3.1. Encapsulació

L'encapsulació fa referència a la capacitat de **combinar dades (atributs) i mòduls que operen sobre eixes dades (funcions) en una mateixa unitat funcional (objecte)**. També permet ocultar atributs d'altres objectes, accedint-hi només a través de mètodes (*getters* i *setters*).

La següent taula detalla els diferents modificadors d'accés que podem aplicar a Java.

| **Modificador**                             | **Àmbit de visibilitat**                                                                | **Descripció**                                                                                                                       | **Equivalent en programació imperativa**                                                                                                     |
| ------------------------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `public`                                    | Accessible des de qualsevol classe o paquet.                                            | El membre (atribut o mètode) és visible des de qualsevol lloc del programa.                                                          | Tots poden vore i modificar la variable o cridar la funció, com si fora una variable global.                                                 |
| `protected`                                 | Accessible des de la mateixa classe, subclasses (herència) i classes del mateix paquet. | Permet que els descendents accedisquen a la informació però no el món exterior.                                                      | Similar a compartir variables dins d’un mateix mòdul o biblioteca amb altres funcions “amics”.                                               |
| *(sense especificar)* o **package-private** | Accessible només des de classes del mateix paquet.                                      | Si no s’indica cap modificador, per defecte només és visible dins del paquet on està definida la classe.                             | Seria com un “pacte entre cavallers” dins d’un mateix fitxer o grup de funcions.                                                             |
| `private`                                   | Accessible només des de la mateixa classe.                                              | Cap altra classe pot accedir directament a l’atribut o mètode. Només es pot modificar a través de mètodes públics (getters/setters). | En la programació imperativa, seria com una variable local dins d’un fitxer o funció, però amb una protecció real reforçada pel compilador. |

💡 Resum conceptual:

En la programació imperativa, l’ocultació de dades es basava en la disciplina del programador.

En la POO, l’encapsulació és una norma reforçada pel llenguatge: ningú pot accedir a un membre `private` si el compilador no ho permet.

### 3.2. Abstracció

L'abstracció permet reduir la informació amb què treballa el programador amagant els detalls no rellevants. En l'exemple del cotxe, el mètode `start()` podria cridar altres com `openAirFilter()` o `heatEngine()`, però qui el faça servir només necessita saber que ha de cridar `start()`.

```java
class Car {
    private boolean running;

    private void openAirFilter(){ /* ... */ }
    private void heatEngine(){ /* ... */ }

    public boolean start(){
        openAirFilter();
        heatEngine();
        running = true;
        return running;
    }
}
```

### 3.3. Herència

La herència és una relació entre classes que pot definir-se com “és un”. Exemple: una classe *Vehicle* pot tindre atributs comuns, i les classes *Car* o *Truck* poden heretar-ne els atributs i afegir-ne de nous.

```java
public class Vehicle {
    protected int totalKm;
    private String chassisNumber;
}

public class Car extends Vehicle {
    int passengers;
}

public class Truck extends Vehicle {
    void unloadBox(){ /* ... */ }
}
```

#### 3.3.1. Classes abstractes

Les classes abstractes definixen mètodes que les subclases han d'implementar.

```java
public abstract class Vehicle {
    public abstract void start();
}

public class ElectricVehicle extends Vehicle {
    public void start(){ /* implementation */ }
}

public class GasVehicle extends Vehicle {
    public void start(){ /* implementation */ }
}
```

#### 3.3.2. Interfícies

Les interfícies defineixen mètodes sense implementar. Una classe pot implementar-ne diverses.

```java
interface TrailerOption {
    void attachTrailer();
    void detachTrailer();
}

public class FordWithTrailer extends GasVehicle implements TrailerOption {
    public void attachTrailer(){ /* implementation */ }
    public void detachTrailer(){ /* implementation */ }
}
```

### 3.4. Polimorfisme

El polimorfisme és la capacitat d'adoptar diverses formes.

* **Sobrecàrrega**: diversos mètodes amb el mateix nom però diferents paràmetres.
* **Sobreescriptura**: redefinir un mètode heretat.
* **Variables polimòrfiques**: una variable pot contindre un objecte de la classe base o d'una subclasse.

## 4. LLENGUATGES

Els llenguatges orientats a objectes més representatius actualment són:

### 4.1. Javascript (Híbrid)

Principal llenguatge web, tant en client com en servidor (Node.js).

### 4.2. Java (Pur)

Molt utilitzat en aplicacions de servidor, escriptori i Android. Inclou *frameworks* com **Spring**.

### 4.3. Python (Híbrid)

Llenguatge de gran simplicitat i versatilitat, adequat per a ensenyar i per a diversos paradigmes.

### 4.4. PHP (Híbrid)

Predominant en aplicacions web de servidor, amb *frameworks* com **Laravel** o **Symfony**.

### 4.5. C# (Pur)

Llenguatge de Microsoft per a la plataforma .NET, usat en aplicacions de tot tipus, tot i la seua dependència de Windows.

## 5. CONCLUSIÓ

La OOP ha permés desenvolupar programes més modulars i mantenibles. Els seus principals avantatges són la reutilització de codi, l'encapsulació i el polimorfisme. Els inconvenients: major complexitat i ús de memòria.

Per a obtindre programes realment mantenibles, és recomanable seguir patrons de disseny, com els descrits per Robert C. Martin (*Uncle Bob*).

## 6. REFERÈNCIA AL SISTEMA EDUCATIU

:[Referència al sistema educatiu](../CONTEXTUALITZACIO/contextualitzacio.md)

## 7. BIBLIOGRAFIA

1. [RedMonk - Language Rankings][redmonk]
2. [4 Pillars of Object Oriented Programming - Mosh](http://codewithmosh.com)
3. *Codi net: Manual d'estil per al desenvolupament àgil de programari* – Robert C. Martin (Anaya Multimedia)
4. *Fonaments de Programació. Algorismes, estructures de dades i objectes* – Lluís Joyanes Aguilar (McGraw-Hill)
5. *Java 8 in Action: Lambdas, Streams and Functional-Style Programming* – Diversos autors (Ed. Manning)
6. Especificació de Java 1.9 per Oracle.

[redmonk]: https://redmonk.com/sogrady/2019/03/20/language-rankings-1-19/
