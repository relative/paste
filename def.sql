create table user
(
    id         serial
        constraint user_pk
            primary key,
    key        varchar(36)                               not null,
    admin      boolean                     default false not null,
    created_at timestamp without time zone default now(),
    memo       text
);

comment on column user.key is '18 random bytes in hex encoding';

comment on column user.memo is 'for any text';

create unique index user_id_uindex
    on user (id);

create unique index user_key_uindex
    on user (key);


create table paste
(
    id         serial
        constraint paste_pk
            primary key,
    user_id    int
        constraint paste_user_id_fk
            references "user",
    key        text                                      not null,
    language   text                  default 'plaintext' not null,
    encrypted  boolean                     default false not null,
    ephemeral  boolean                     default false not null,
    updated    boolean                     default false not null,
    iv         text,
    data       text                                      not null,
    delete_at timestamp without time zone,
    updated_at timestamp without time zone,
    created_at timestamp without time zone default now() not null
);

create unique index paste_id_uindex
    on paste (id);

create unique index paste_key_uindex
    on paste (key);

